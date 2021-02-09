import TicketService from '../../services/ticket/ticketService'
import profileService from '../../services/profile/profileService'
import { Validations } from '../../utils/validation'
export default {
  name: 'Ticket',
  data () {
    return {
      name: null,
      description: null,
      email: null,
      ticketId: ''
    }
  },
  methods: {
    isValidEmail (val) {
      return Validations.isValidEmail(val)
    },
    async emailValidate () {
      const emali = this.isValidEmail(this.email) | false
      console.log(emali)
      if (!emali) {
        return
      }
      await profileService.getUserByemail(this.email).then(resp => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Email found'
        })
        console.log(resp.data.data._id, 'rep')
        this.userId = resp.data.data._id
      })
        .catch((_) => {
          this.$q.notify({
            color: 'orange-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Email no found'
          })
        })
    },
    async create () {
      const data = {
        name: this.name,
        description: this.description,
        userId: this.userId
      }
      await TicketService.createTicket(data).then(resp => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
        this.ticketId = resp.data.data._id
      })
        .catch((_) => {
          this.$q.notify({
            color: 'orange-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        })
    },
    onReset () {
      this.email = null
      this.title = null
      this.description = null
      this.ticketId = null
    }
  }
}
