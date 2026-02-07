import Api from './Api'


export default {
  login(data) {
    return api.post('/login', data)
  },
  logout() {
    return api.post('/logout')
  }
}
