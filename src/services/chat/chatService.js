import ApiService from '../apiService'
const chatService = {
  createChat (formData) {
    return ApiService.post('/api/chat', formData)
  },
  getChat (formData) {
    return ApiService.get(`/api/chat/${formData}`)
  },
  getChatByEmail (formData) {
    return ApiService.get(`/api/chat/${formData}`)
  }
}

export default chatService
