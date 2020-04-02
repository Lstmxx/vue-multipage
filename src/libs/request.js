import service from './axios/axios'

export function baseGet (config) {
  const request = {
    url: config.url,
    method: 'GET'
  }
  return service.request(request)
}

export function basePost (config) {
  const request = {
    url: config.url,
    data: config.data,
    method: 'POST'
  }
  return service.request(request)
}

export function login (bankToken) {
  const request = {
    url: '',
    // data: data,
    method: 'POST'
  }
  return service.request(request)
}
