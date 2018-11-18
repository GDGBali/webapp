<template>
  <v-layout wrap justify-center>
    <v-flex>
      <div class="display-1 text-xs-center mb-4">
        DevFest Attendees
      </div>
      <div class="text-xs-center">
        <v-btn 
          slot="activator" 
          color="primary" 
          class="mb-5"
          large
          @click="activateQr"
        >
          scan qr code
        </v-btn>
      </div>
      <v-dialog
        lazy
        v-model="qr.dialog"
        max-width="320"
      >
        <v-card light>
          <v-card-text>
            <div v-if="qr.active">
              <qrcode-stream @decode="onDecode" @init="initQr" :paused="qr.paused" />
            </div>
            <div v-else>
              <template v-if="qr.loading">
                <div class="text-xs-center pa-5">
                  <v-progress-circular
                    :size="60"
                    :width="6"
                    color="primary"
                    indeterminate
                  />
                </div>
              </template>
              <template v-else>
                <v-layout column>
                  <div class="text-xs-center headline" v-if="qr.error">
                    Failed, please try again.
                  </div>
                  <div class="text-xs-center headline mb-5" v-else>
                    {{ qr.user.name }}
                    <br>
                    {{ qr.user.email }}
                  </div>
                  <v-btn 
                    color="primary"
                    v-if="!qr.error"
                    @click="qrConfirm"
                  >
                    confirm
                  </v-btn>
                  <v-btn 
                    color="primary" 
                    @click="qr.active = true; qr.error = false;"
                  >
                    scan again
                  </v-btn>
                </v-layout>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-flex>
    <v-flex xs12>
      <v-card light>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-layout>
          <v-spacer />
          <v-dialog v-model="newDialog" max-width="700px">
            <v-btn 
              slot="activator" 
              color="primary" 
              class="mb-2"
            >
              New Attendee
            </v-btn>
            <v-card light>
              <v-card-title>
                <span class="headline">
                  New Attendee
                </span>
              </v-card-title>
  
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field v-model="newAttendee.name" label="Full Name" />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="newAttendee.email" label="Email" />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="newAttendee.phone" label="Phone" />
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="newAttendee.institution" label="Institution" />
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-btn color="error" @click="close">
                  Cancel
                </v-btn>
                <v-spacer />
                <v-btn color="primary" @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
        <v-data-table
          :headers="headers"
          :items="attendeesList"
          :search="search"
          class="elevation-1"
          hide-actions
          light
          :custom-sort="customSort"
        >
          <template slot="items" slot-scope="{ item }">
            <td>
              {{ item.name }}
            </td>
            <td>
              {{ item.email }}
            </td>
            <td>
              {{ item.phone }}
            </td>
            <td>
              <v-checkbox
                :input-value="item.confirmedAt"
                @change="confirmAttendee($event, item.email)"
                color="primary"
              />
            </td>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader';
import { registerEvent } from '@api/apiRequest';
import api from '@api';

const defaultAttendee = {
  name: '',
  email: '',
  phone: '',
  institution: '',
};

export default {
  components: {
    QrcodeStream,
  },
  created() {
    this.populateList();
  },
  data: () => ({
    headers: [
      {
        text: 'Name',
        value: 'name',
      },
      {
        text: 'Email',
        value: 'email',
      },
      {
        text: 'Phone',
        sortable: false,
        value: 'phone',
      },
      {
        text: 'Confirmed',
        sortable: false,
      },
    ],
    search: '',
    attendeesList: [],
    newDialog: false,
    newAttendee: {
      ...defaultAttendee,
    },
    qr: {
      dialog: false,
      active: false,
      paused: false,
      loading: false,
      user: {},
    },
  }),
  methods: {
    activateQr() {
      this.qr.dialog = true;
      this.qr.active = true;
      this.qr.error = false;
    },
    close() {
      this.newDialog = false;
      this.newAttendee = { ...defaultAttendee };
    },
    async save() {
      const { id: eventId } = this.$route.query;
      this.newAttendee.fromAdmin = true;
      const { data } = await registerEvent(this.newAttendee, eventId);
      this.newDialog = false;
      this.attendeesList.push(data);
    },
    async initQr(promise) {
      await promise;
    },
    async getAttendee(data) {
      const {
        data: { name, email },
      } = await api.get(`attendees/${data.userId}`);
      this.qr.user = {
        name,
        email,
      };
      this.qr.loading = false;
    },
    onDecode(result) {
      this.qr.active = false;
      try {
        const details = JSON.parse(result);
        this.qr.loading = true;
        this.getAttendee(details);
      } catch (error) {
        this.qr.error = true;
      }
    },
    async populateList() {
      const { id: eventId } = this.$route.query;
      const { data } = await api.get('attendees', { params: { eventId } });
      this.attendeesList = data;
    },
    findAttendee(email) {
      return this.attendeesList.find(item => item.email === email);
    },
    async refreshList(value, id) {
      const { data: attendeeItem } = await api.put('attendees/confirm', {
        value,
        id,
      });
      this.attendeesList = [
        ...this.attendeesList.filter(item => item.id !== attendeeItem.id),
        attendeeItem,
      ];
    },
    qrConfirm() {
      const { id } = this.findAttendee(this.qr.user.email);
      this.refreshList(true, id);
      this.qr.loading = false;
      this.qr.error = false;
      this.qr.dialog = false;
      this.qr.active = false;
    },
    confirmAttendee(value, email) {
      const { id } = this.findAttendee(email);
      this.refreshList(value, id);
    },
    customSort(items, _, dsc) {
      return items.sort(function(a, b) {
        if (a.confirmedAt !== null || b.confirmedAt !== null) return 1;
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        let result = 0;
        if (nameA < nameB) {
          result = 1;
        }
        if (nameA > nameB) {
          result = -1;
        }

        result = dsc ? result : result * -1;

        return result;
      });
    },
  },
};
</script>
