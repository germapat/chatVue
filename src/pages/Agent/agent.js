import Chat from '../../components/chat/Chat.vue'
import Ticket from '../../components/Ticket/Ticket.vue'

export default {
  name: 'Agent',
  data () {
    return {
      nameDisable: false,
      title: 'Chat KeyBe',
      name: '',
      text: '',
      messages: [],
      email: 'gdpm1986@gmail.com',
      type: 'user'
    }
  },
  components: {
    Chat,
    Ticket
  },
  mounted () {
  }
}
