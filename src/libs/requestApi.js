import {
  baseGet,
  basePost,
  login
} from './request'
import { setToken } from './token-utils'

function checkToken (promiseCallBack, config, resolve, reject) {
  promiseCallBack(config).then((response) => {
    if (!response.msg) {
      resolve(response.data.data)
    }
    if (response.status === 401) {
      login().then((responseData) => {
        // localStorage.setItem('token', responseData.data.data.token)
        setToken(responseData.data.data.token)
        promiseCallBack(config, responseData.data.data.token).then((response) => {
          if (!response.msg) {
            resolve(response.data.data)
          }
        }).catch((err) => {
          reject(err)
        })
      }).catch((err) => {
        reject(err)
      })
    }
  }).catch((err) => {
    reject(err)
  })
}

export function post (config) {
  return new Promise((resolve, reject) => {
    const callBack = basePost
    checkToken(callBack, config, resolve, reject)
  })
}

export function get (config) {
  return new Promise((resolve, reject) => {
    const callBack = baseGet
    checkToken(callBack, config, resolve, reject)
  })
}
