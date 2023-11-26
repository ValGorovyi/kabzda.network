import { authAPI } from "../components/users/api/api";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA = 'network/auth/GET_CAPTCHA';




const initialState = {
  userId: null,
  email: null,
  login: null,
  captcha: null,
}

const getCaptcha = (captcha) => ({ type: GET_CAPTCHA, payload: {captcha}})
const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state, ...action.payload, isAuth: true
      }
    } 
    case GET_CAPTCHA: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state;
  }
}


export const getAuthUserData = () => async (dispatch) => {
  let response =  await authAPI.me()
        if (response.data.resultCode === 0) {
          let { id, login, email } = { ...response.data.data }
          dispatch(setAuthUserData(id, email, login, true))
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await authAPI.captcha()
  console.log(response.data);
  dispatch(getCaptcha(response.data.url))
}

export const LogIn = (email, password, rememberMe, captcha = null, setErrors) => async (dispatch) => {

    let response = await authAPI.login(email, password, captcha, rememberMe)
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else if(response.data.resultCode === 10){
          dispatch(getCaptchaUrl())
        } else {
          setErrors('server', {
            type:'custom',
            message: response.message
          })
        
      }
}

export const LogOut = () => async (dispatch) =>{
    let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    
}

export default authReducer;