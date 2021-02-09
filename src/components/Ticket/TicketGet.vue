<template>
  <div class="q-pa-md" style="max-width: 600px">
    <h5>Find ticket</h5>
    <q-form class="q-gutter-md">
      <q-input
        v-model="ticketId"
        label="Nro ticket *"
        hint="Nro ticket"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <div>
        <q-btn label="Search" @click="getTicket" color="secondary" />
      </div>
    </q-form>
    <div v-if="ticket.name">
      <div class="q-pa-md">
        <q-markup-table>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Title</th>
              <th>Description</th>
              <th>Create date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>{{ ticket._id }}</td>
              <td>{{ ticket.name }}</td>
              <td>{{ ticket.description }}</td>
              <td>{{ ticket.created_at | formatDate }}</td>
              <td>{{ ticket.status }}</td>
            </tr>
          </thead>
        </q-markup-table>
      </div>
    </div>
  </div>
</template>

<script src="./ticketGet.js"></script>
