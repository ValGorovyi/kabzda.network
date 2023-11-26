import {getUsers} from'../components/users/api/api';
import {uppdateObjInArray} from '../common/utils/object-helper'


const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';
const SET_USERS = "network/users/SET_USERS"
const SET_CURRENT_PAGE = 'network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FERCHING = 'network/users/TOGGLE_IS_FERCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'network/users/TOGGLE_IS_FOLLOWING_PROGRESS';



const initialState = {
  users: [],
  pageSize: 7,
  totalUsersCound: 0,
  currentPage: 1,
  isFetching: false,
}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unFollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FERCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching })

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: uppdateObjInArray(state.users, action.userID, 'id', {followed: true})
        // state.users.map((user) => {
        //   if (user.id === action.userID) {
        //     return { ...user, followed: true, }
        //   }
        //   return user
        // }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: uppdateObjInArray(state.users, action.userID, 'id', {followed: false})
        // state.users.map((user) => {
        //   if (user.id === action.userID) {
        //     return { ...user, followed: false, }
        //   }
        //   return user
        // }),
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCound: action.totalUsersCount }
    }
    case TOGGLE_IS_FERCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state;
  }
}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await getUsers(currentPage, pageSize)
      dispatch(setUsers(response.items));
      dispatch(toggleIsFetching(false))
      dispatch(setUsersTotalCount(response.totalCount))
}

export default usersReducer;