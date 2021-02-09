import ApiService from '../apiService'
const TicketService = {
  createTicket (formData) {
    return ApiService.post('/api/ticket', formData)
  },
  getTicket (formData) {
    return ApiService.get(`/api/ticket/${formData}`)
  }
}

export default TicketService
