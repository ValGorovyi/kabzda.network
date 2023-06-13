import axios from "axios";
import { authAPI } from "../components/users/api/api";

const SET_USER_DATA = 'SET_USER_DATA'




const initialState = {
  userId: null,
  email: null,
  login: null,
}


const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state, ...action.payload, isAuth: true
      }
    }
    default:
      return state;
  }
}


export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = { ...response.data.data }
          dispatch(setAuthUserData(id, email, login, true))
        }
      });
}

export const LogIn = (email, password, rememberMe, setErrors) => {
  return (dispatch) =>

    authAPI.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData());
        } else {
          setErrors('server', {
            type:'custom',
            message: response.message
          })
        }
      })
}

export const LogOut = () => {
  return (dispatch) =>
    authAPI.logout().then(response => {
      console.log(response);
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
}

export default authReducer;