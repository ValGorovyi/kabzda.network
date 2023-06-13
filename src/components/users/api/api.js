import axios from "axios";

const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {}

})



export function getUsers(currentPage, pageSize) {
  return instans.get(`users?page=${currentPage}&count=${pageSize}`,)
    .then(response => {
      return response.data
    })
}

export function getPageWithUsers(pageNumber, pageSize) {
  return instans.get(`users?page=${pageNumber}&count=${pageSize}`)
    .then(response => {
      return response.data
    })
}

export function getStatusProfile(userId) {
  return instans.get(`profile/status/${userId}`)
  .then(response => {
    return response.data

  })
}

export function putStatusProfile(status){
  return instans.put(`profile/status`, {status})
  .then(response => {
    return response.data
  })
}

export function authMe(){
  return instans.get(`/auth/me`)
  .then(response => {
    console.log( response.data)
  })
}

export const authAPI = {
  me() {
    return instans.get(`/auth/me`)
  },
  login(email, password, rememderMe = false) {
    return instans.post(`/auth/login`, {email, password, rememderMe})
  },
  logout() {
    return instans.delete('/auth/login')
  },
}
