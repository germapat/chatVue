const TOKEN_KEY = 'token'
const USER_KEY = 'user'

const TokenService = {
  getToken () {
    return localStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
  }
}

const StorageService = {
  saveUserData (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  saveOptions (options) {
    localStorage.setItem('options', JSON.stringify(options))
  },

  saveIntegratedProvider (value) {
    localStorage.setItem('integratedProvider', value)
  },

  clearStorage () {
    localStorage.clear()
  },

  getIntegratedProvider () {
    return +localStorage.getItem('integratedProvider')
  },

  getUserData () {
    return JSON.parse(localStorage.getItem(USER_KEY))
  },

  getOptions () {
    localStorage.getItem('options')
  }
}

export { TokenService, StorageService }
