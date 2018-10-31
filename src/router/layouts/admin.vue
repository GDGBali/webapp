<template>
  <v-app dark>
    <AdminNavBar />
    <v-content>
      <slot />
    </v-content>
    <BaseSnackbar />
    <AuthDialog />
  </v-app>
</template>

<script>
import adminItems from '@src/data/adminItems';
import { mapState } from 'vuex';

import { authComputed } from '@state/helpers';

const AuthDialog = () =>
  import(/* webpackChunkName: "auth-dialog" */ '@components/Auth/AuthDialog');

const BaseSnackbar = () =>
  import(/* webpackChunkName: "navbar" */ '@components/Base/BaseSnackbar');

const AdminNavBar = () =>
  import(/* webpackChunkName: "navbar" */ '@components/AdminNavBar');

export default {
  components: {
    AuthDialog,
    BaseSnackbar,
    AdminNavBar,
  },
  data: () => ({
    dark: false,
    mini: false,
    drawer: true,
    menus: [],
  }),
  mounted() {
    this.menus = adminItems;
  },
  computed: {
    ...mapState('admin', ['pageTitle']),
    ...authComputed,
  },
};
</script>

<style lang="scss">
.nav {
  z-index: 3 !important;
}
.footer {
  color: #cfd8dc !important;
  background: #303c42 !important;
  img {
    width: 24px;
    margin-right: 10px;
  }
}
</style>
