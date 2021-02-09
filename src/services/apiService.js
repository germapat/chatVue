import axios from 'axios'
import { TokenService } from './StorageService'

const ApiService = {
  init (baseURL) {
    axios.defaults.baseURL = 'http://localhost:3000'
  },
  getHostAndPort () {
    const baseUrl = axios.defaults.baseURL.split('://')
    return baseUrl.length === 1 ? baseUrl[0] : baseUrl[1]
  },
  setHeader () {
    const authorization = 'authorization'
    axios.defaults.headers.common[authorization] = TokenService.getToken()
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },
  removeHeader () {
    axios.defaults.headers.common = {}
  },
  get (resource) {
    return axios.get(resource)
  },
  post (resource, data) {
    return axios.post(resource, data)
  },
  postFile (resource, file) {
    const formData = new FormData()
    const headers = { 'Content-Type': 'multipart/form-data' }
    formData.append('attachment', file)
    return axios.post(resource, formData, { headers })
  },
  put (resource, data) {
    return axios.put(resource, data)
  },
  patch (resource, data) {
    return axios.patch(resource, data)
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService
