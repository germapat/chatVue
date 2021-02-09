import profileService from '../services/profile/profileService.js'
import TicketGet from '../components/Ticket/ticketGet.vue'
export default {
  components: {
    TicketGet
  },
  data () {
    return {
      firstName: null,
      secundName: null,
      lastName: null,
      email: null
    }
  },
  methods: {
    isValidEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return emailPattern.test(val) || 'Invalid email'
    },
    async onSubmit () {
      const data = {
        firstName: this.firstName,
        secundName: this.secundName || '',
        lastName: this.lastName,
        email: this.email
      }
      await profileService.createProfile(data)
        .then((res) => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
          this.$router.push({
            name: 'chat',
            params: { email: this.email, name: this.firstName + ' ' + this.secundName + ' ' + this.lastName }
          })
          this.onReset()
        })
        .catch((er) => {
          this.$q.notify({
            color: 'orange-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Error data'
          })
        })
    },
    onReset () {
      this.firstName = null
      this.secundName = null
      this.lastName = null
      this.email = null
    }
  }
}
