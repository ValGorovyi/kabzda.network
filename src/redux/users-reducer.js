import {getUsers} from'../components/users/api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FERCHING = 'TOGGLE_IS_FERCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



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
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true, }
          }
          return user
        }),
      }
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false, }
          }
          return user
        }),
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

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    getUsers(currentPage, pageSize).then(response => {
      dispatch(setUsers(response.items));
      dispatch(toggleIsFetching(false))
      dispatch(setUsersTotalCount(response.totalCount))
    })
  }
}

export default usersReducer;