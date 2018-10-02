<template>
  <v-dialog
    v-model="showDialog"
    max-width="320"
  >
    <v-card light>
      <v-card-title class="headline justify-center">
        Login
      </v-card-title>
      <Providers />
    </v-card>
  </v-dialog>
</template>
 <script>
import { mapState } from 'vuex';
import store from '@state/store';
import { HIDE_AUTH_DIALOG } from '@state/mutationTypes';
import Providers from '@components/Auth/Providers';

export default {
  components: {
    Providers,
  },
  computed: {
    ...mapState(['authDialog']),
    showDialog: {
      get() {
        return this.authDialog.visible;
      },
      set(value) {
        if (!value) {
          store.commit(HIDE_AUTH_DIALOG);
        }
      },
    },
  },
};
</script>
