const storage = window.localStorage
export const setToken = (token) => {
  storage.setItem('token', token)
}

export const getToken = () => {
  const token = storage.getItem('token')
  if (token) return token
  else return false
}
