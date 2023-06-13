import { getStatusProfile, putStatusProfile } from "../components/users/api/api";

const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD-POST';
const UPPDATE_NEW_POST_TEXT = 'UPPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'


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

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = (userId) => (dispatch) => {
  getStatusProfile(userId).then(response => {
    console.log(' get   .' +response);
    dispatch(setStatus(response))
  })
}

export const uppdateStatus = (status) => (dispatch) => {
  putStatusProfile(status).then(response => {
    console.log(response.resultCode);
    if(response.resultCode === 0){
      console.log('put   .'+response.data);
      console.log(status);
      dispatch(setStatus(status))
    }
  })
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
      // let copyState = { ...state };
      // copyState.posts = [...state.posts];
      // copyState.newPostText = state.newPostText;
      // const post = {
      //   id: 2,
      //   like: '0',
      //   dislike: 5,
      //   text: copyState.newPostText
      // };
      // copyState.posts.push(post);
      // copyState.newPostText = '';
      // return copyState;
      return {
        ...state,
        posts: [...state.posts, {id: 2, like: 0, dislike: 5, text: action.text}],
        newPostText: '',
      }
    }
    case UPPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
      // let copyState = { ...state };
      // copyState.newPostText = action.newText;
      // return copyState;
    }
    case SET_USER_PROFILE : {
      return {
        ...state, profile: action.profile
      }
    }
    case SET_STATUS : {
      return {
        ...state, status: action.status
      }
    }

    default:
      return state;
  }
}

export default profileReducer;