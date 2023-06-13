import { getAuthUserData } from "./auth-reducer";


const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'




const initialState = {
  initialized: false
}


export const initializedSucces = () => ({ type: INITIALIZED_SUCCES, })

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state, initialized: true
      }
    }
    default:
      return state;
  }
}

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSucces())
  })
}


export default appReducer;