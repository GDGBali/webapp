<template>
  <v-app dark>
    <v-navigation-drawer 
      v-model="drawer" 
      :mini-variant.sync="mini" 
      persistent 
      enable-resize-watcher
      :dark="dark"
      app
    >
      <div class="pa-3 text-xs-center" v-show="!mini">
        <div class="display-2 py-4">
          GDG Bali Admin
        </div>
      </div>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-img :src="currentUser.avatarUrl" class="primary" />
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ currentUser.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />
      <div v-if="$can('manage', 'all')">
        <h1>hello</h1>
      </div>
      <v-list dense="dense">
        <template v-if="$can('manage', 'all')">
          <template v-for="(item) in menus">
            <v-list-tile
              :to="`/kelian${item.href}`" 
              router="router" 
              ripple="ripple"
              :key="item.title"
              exact
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      class="primary darken-1" 
      fixed="fixed" 
      dark="dark"
      app
    >
      <v-toolbar-side-icon dark="dark" @click.native.stop="drawer = !drawer" />
      <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
      <v-spacer />
      <v-btn flat to="/">
        home
      </v-btn>
    </v-toolbar>
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

export default {
  components: {
    AuthDialog,
    BaseSnackbar,
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
