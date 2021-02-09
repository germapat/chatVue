<template>
  <div class="q-pa-md">
    <h5>Register ticket</h5>
    <q-form
      @onSubmit="create"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        v-model="email"
        label="Your email *"
        hint="Email"
        lazy-rules
        @keyup.enter.native="emailValidate"
        :rules="[val => !!val || 'Email is missing', isValidEmail,]"
      />
      <q-input
        v-model="name"
        label="Title"
        hint="Title"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        v-model="description"
        label="Description"
        hint="Description"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <div v-if="ticketId">
        <span>Ticket nro: {{ ticketId }}</span>
      </div>
      <div>
        <q-btn label="Submit" @click="create" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script src="./ticket.js"></script>
