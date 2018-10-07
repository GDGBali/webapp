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
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Full Name</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider />
      <v-list dense="dense">
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
    </v-toolbar>
    <v-content>
      <slot />
    </v-content>
    <BaseSnackbar />
    <BaseAuthDialog />
  </v-app>
</template>

<script>
import adminItems from '@src/data/adminItems';
import { mapState } from 'vuex';

export default {
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
