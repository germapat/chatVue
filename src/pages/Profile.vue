<template>
  <div class="q-pa-md">
    <h5>Register</h5>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        v-model="firstName"
        label="First name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        v-model="secundName"
        label="Secund name"
        lazy-rules
      />
      <q-input
        v-model="lastName"
        label="Last name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        v-model="email"
        label="Your email *"
        hint="Email"
        lazy-rules
        :rules="[val => !!val || 'Email is missing', isValidEmail,]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <TicketGet></TicketGet>
  </div>
</template>

<script src="./profile.js"></script>
