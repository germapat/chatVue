import ApiService from '../apiService'
const profileService = {
  createProfile (formData) {
    return ApiService.post('/api/user', formData)
  },
  getUserByemail (formData) {
    return ApiService.get(`/api/user/email/${formData}`)
  }
}

export default profileService
