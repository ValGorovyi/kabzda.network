import { getStatusProfile, putStatusProfile, savePhotoAPI, aboutId } from "../components/users/api/api";

const SET_STATUS = 'network/profile/SET_STATUS';
const ADD_POST = 'network/profile/ADD-POST';
const UPPDATE_NEW_POST_TEXT = 'network/profile/UPPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE'
const SAVE_PHOTO = 'network/profile/SAVE_PHOTO'


export const onPostChangeActionCreater = (text) => {
  return {
    type: UPPDATE_NEW_POST_TEXT, newText: text,
  }
}

export const addPostActionCreater = (text) => {
  return {
    type: ADD_POST,
    text,
  }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const savePhotoSucces = (photo) => ({ type: SAVE_PHOTO, photo })

export const getStatus = (userId) => async (dispatch) => {
  let response = await getStatusProfile(userId)
  dispatch(setStatus(response))
}

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await aboutId(userId)
  dispatch(setUserProfile(response));
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await savePhotoAPI(file)
  dispatch(savePhoto(response.data.data.photo))
}

export const uppdateStatus = (status) => async (dispatch) => {
  let response = await putStatusProfile(status)
  if (response.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

const initialState = {
  posts: [
    { id: 1, like: '0', dislike: '3', text: 'how are you?' },
    { id: 1, like: '3', dislike: '4', text: 'it is first post' },
    { id: 1, like: '0', dislike: '3', text: 'happy new year' },
    { id: 1, like: '0', dislike: '3', text: '...' },
  ],
  profile: null,
  newPostText: 'idi nah',
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, { id: 2, like: 0, dislike: 5, text: action.text }],
        newPostText: '',
      }
    }
    case UPPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }
    case SAVE_PHOTO: {
      return {
        ...state, profile: { ...state.profile }, photo: action.photo
      }
    }
    default:
      return state;
  }
}

export default profileReducer;