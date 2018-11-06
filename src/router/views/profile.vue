<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <div class="text-xs-center">
          <v-avatar
            size="128"
          >
            <template v-if="currentUser.avatarUrl">
              <v-img
                :src="currentUser.avatarUrl"
                aspect-ratio="1"
                class="primary"
              />
            </template>
            <v-icon
              v-else
              size="100"
              class="primary"
            >
              person
            </v-icon>
          </v-avatar>
          <div class="headline mt-4">
            {{ currentUser.name }}
          </div>
        </div>
      </v-flex>
      <v-flex xs12 class="mt-5" v-if="currentUser.attendsAt.length !== 0">
        <v-expansion-panel popout>
          <v-expansion-panel-content class="primary">
            <div slot="header">
              Tickets
            </div>
            <v-card light>
              <v-card-text>
                <v-layout column align-center>
                  <div v-for="event in currentUser.attendsAt" :key="event.id">
                    <v-btn color="primary" @click="openQr(currentUser, event)">
                      {{ event.name }}
                    </v-btn>
                  </div>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-dialog
          lazy
          v-model="showQr"
          max-width="320"
        >
          <v-card light>
            <v-card-text>
              <QrCode :qr-data="qrData" />
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
      <v-flex xs12>
        <div class="headline mt-4 text-xs-center">
          Kami akan segera menambahkan beberapa fitur lainnya pada halaman ini.
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QrCode from '@components/Events/QrCode';

export default {
  metaInfo() {
    return {
      title: this.currentUser.name,
      meta: [
        {
          name: 'description',
          content: `The user profile for ${this.currentUser.name}.`,
        },
      ],
    };
  },
  components: {
    QrCode,
  },
  props: {
    currentUser: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    showQr: false,
    eventId: null,
    qrData: {},
  }),
  methods: {
    openQr(currentUser, event) {
      this.qrData = {
        eventId: event.id,
        email: currentUser.email,
        userId: currentUser.id,
      };
      this.showQr = true;
    },
  },
};
</script>
