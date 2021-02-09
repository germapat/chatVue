import chatService from '../../services/chat/chatService'
import TicketGet from '../../components/Ticket/ticketGet.vue'

export default {
  components: {
    TicketGet
  },
  name: 'Chat',
  data () {
    return {
      nameDisable: false,
      title: 'Chat KeyBe',
      name: '',
      text: '',
      messages: [],
      email: undefined,
      type: 'agent'
    }
  },
  sockets: {
    connect: function () {
      console.log('socket connected German')
    },
    customEmit: function (data) {
      console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods: {
    async sendMessage () {
      if (this.validateInput()) {
        const data = {
          message: {
            name: this.name,
            text: this.text,
            type: this.type,
            date: ''
          },
          email: this.email
        }
        await chatService.createChat(data)
          .then((res) => {
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
            this.nameDisable = true
            this.messages = res.data.data.message
            this.$socket.emit('msgToServer', res.data.data)
          })
          .catch((_) => {
            this.$q.notify({
              color: 'orange-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'error send'
            })
          })
      }
    },
    validateInput () {
      return this.name.length > 0 && this.text.length > 0
    }
  },
  async mounted () {
    this.name = this.$route.params.name
    this.email = this.$route.params.email
    if (this.email !== undefined) {
      this.type = 'user'
      await chatService.getChatByEmail(this.email)
        .then((res) => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
          this.nameDisable = true
          this.messages = res.data.message
          this.name = res.data.message[0].name
          this.$socket.emit('msgToServer', res.data.data)
        })
    }
    this.sockets.subscribe('msgToClient', (data) => {
      this.email = data.email
      this.messages = data.message
    })
  }
}
