import axios from "axios";

const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {}

})

export const aboutId = (profileID) => {
  return instans.get(`profile/${profileID}`)
    .then(response => {
      return response.data
    })
}

export const followUnFollowAPI = {
  follow(userId) {
    return instans.post(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  },
  unFollow(userId) {
    return instans.delete(`follow/${userId}`)
      .then(response => {
        return response.data
      })
  }
}

export function getUsers(currentPage, pageSize) {
  return instans.get(`users?page=${currentPage}&count=${pageSize}`,)
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

export function putStatusProfile(status) {
  return instans.put(`profile/status`, { status })
    .then(response => {
      return response.data
    })
}

export const authAPI = {
  captcha() {
    return instans.get('/security/get-captcha-url')
  },
  me() {
    return instans.get(`/auth/me`)
  },
  login(email, password, captcha, rememderMe = false) {
    return instans.post(`/auth/login`, { email, password, rememderMe, captcha })
  },
  logout() {
    return instans.delete('/auth/login')
  },
  putContacts(contacts) {
    return instans.put('/profile', {contacts:{contacts}})
  }
}

export const savePhotoAPI = (photoFile) => {
  const formData = new FormData();
  formData.append('image', photoFile)
  return instans.put('profile/photo', formData, {'Content_type': 'multi-path/form-photo'} )
}