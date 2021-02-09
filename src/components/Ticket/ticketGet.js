import TicketService from '../../services/ticket/ticketService'
export default {
  name: 'GetTicket',
  data () {
    return {
      ticketId: null,
      ticket: {
        _id: null,
        name: null,
        description: null,
        status: null
      }
    }
  },
  methods: {
    async getTicket () {
      await TicketService.getTicket(this.ticketId).then(resp => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
        this.ticket = resp.data.data
        console.log(resp.data.data)
      })
        .catch((_) => {
          this.ticket.name = null
          this.$q.notify({
            color: 'orange-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'No found'
          })
        })
    }
  }
}
