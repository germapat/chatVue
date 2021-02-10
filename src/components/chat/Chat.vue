<template>
  <div class="row">
    <div class="q-pa-md">
      <h5 class="text-center">{{ title }}</h5>
      <div id="chat">
        <q-input
          ref="name"
          v-model="name"
          label="name *"
          lazy-rules
          :rules="[val => !!val || 'Please type something', validateInput, ]"
          :disable="nameDisable"
        />
        <br />
        <div class="card">
          <div
            id="messages"
            class="card-block"
            v-for="(message, index) of messages"
            :key="index"
          >
            <ul v-if="message.type === 'agent'" class="red border">
              <q-avatar color="secondary" text-color="white"> A </q-avatar>
              <li>Name: {{ message.name }}</li>
              <li>Text: {{ message.text }}</li>
              <li>Date: {{ message.date | formatDate }}</li>
            </ul>
            <ul v-else class="border red">
              <q-avatar color="primary" text-color="white"> U </q-avatar>
              <li>Name: {{ message.name }}</li>
              <li>Text: {{ message.text }}</li>
              <li>Date: {{ message.date | formatDate }}</li>
            </ul>
          </div>
        </div>
        <br />
        <textarea
          id="textarea"
          cols="65"
          rows="5"
          style="resize: both"
          v-model="text"
          placeholder="Enter message..."
        ></textarea>
        <br />
        <button id="send" class="btn" @click.prevent="sendMessage">Send</button>
      </div>
      <TicketGet v-if="type == 'user'"></TicketGet>
    </div>
  </div>
</template>

<script src="./chat.js">
</script>
<style scoped>
ul.red {
  list-style-type: circle;
  color-adjust: aqua;
}
.border {
  border: 1px solid black;
}
</style>
