<template>
  <v-menu
    lazy
    v-model="profileMenu"
    offset-y
  >
    <v-btn slot="activator" icon large>
      <v-icon large :color="loggedIn ? 'primary' : 'grey'">account_circle</v-icon>
    </v-btn>
    <v-card light class="pa-2">
      <div
        v-if="!loggedIn"
        class="py-1"
      >
        <v-card-title primary-title>
          <div class="text-xs-center">
            <div class="mb-3">
              Login to your account
            </div>
            <div>
              <v-btn color="primary" @click="SHOW_AUTH_DIALOG">
                <v-icon left>exit_to_app</v-icon>
                Login
              </v-btn>
            </div>
          </div>
        </v-card-title>
      </div>
      <v-layout
        v-else
        align-center
      >
        <v-flex xs12 text-xs-center>
          <div class="py-1" v-if="$can('read', 'admin')">
            <v-btn color="secondary" to="/kelian" block>
              <v-icon left>developer_mode</v-icon>
              Admin
            </v-btn>
          </div>
          <v-divider />
          <div class="py-1">
            <v-btn color="primary" to="/profile" block>
              <v-icon left>account_circle</v-icon>
              Profile
            </v-btn>
          </div>
          <v-divider />
          <div class="py-1">
            <v-btn color="error" @click="logout" block>
              <v-icon left>power_settings_new</v-icon>
              Logout
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-menu>
</template>

<script>
import { authComputed } from '@state/helpers';
import { SHOW_AUTH_DIALOG, LOGOUT } from '@state/mutationTypes';
import { mapMutations } from 'vuex';
export default {
  data: () => ({
    profileMenu: false,
  }),
  methods: {
    ...mapMutations([SHOW_AUTH_DIALOG]),
    logout() {
      this.$store.dispatch(LOGOUT);
    },
  },
  computed: {
    ...authComputed,
  },
};
</script>
