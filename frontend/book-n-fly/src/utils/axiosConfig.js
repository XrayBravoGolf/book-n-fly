import axios from 'axios'
import router from '@/router'
import * as API from '@/api.js'

// axios instance configs
const $myAxios = axios.create({
  timeout: 30
})
$myAxios.all = axios.all

$myAxios.interceptors.request.use(config => {
  // get authority except the login api
  if (config.url !== API.LOGIN) {
    if (window.sessionStorage.getItem('Authorization')) {
      config.headers.Authorization = JSON.parse(window.sessionStorage.getItem('Authorization'))
    } else {
      console.warn('invalid authorization cookies!')
    }
  }
  return config
})

// http status code = 401
function backToLogin () {
  window.sessionStorage.removeItem('Authorization')
  router.push('/login')
}

// catch http response
// integrate error handling
$myAxios.interceptors.response.use(
  response => {
    if (response.status === 401) {
      // ticket error
      console.warn("[response] user's authorization is expired, to login page")
      backToLogin()
    }
    return response
  },
  // invalid response
  error => {
    if (error) {
      if (error.response && error.response.status === 401) {
        // ticket error
        console.warn("user's authorization is expired, to login page")
        backToLogin()
      }
      return Promise.reject(error)
    }
    return Promise.reject(new Error('unknown error'))
  }
)

export const myAxios = $myAxios
