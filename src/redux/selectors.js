import { createSelector } from "reselect"

export const getIsFetchingSelector = (state) => {
  return state.usersPage.isFetching
}


const getUsersSelector = (state) => {
  return state.usersPage.users
}
export const getUsersSelectorSuper = createSelector( getUsersSelector, (users) =>{ 
  return users
})


export const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize
}
export const getTotalUsersCoundSelector = (state) => {
  console.log(state.usersPage.totalUsersCound);
  return state.usersPage.totalUsersCound
}
export const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage
}