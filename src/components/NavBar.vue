<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      v-if="!hideDrawer"
      fixed
    >
      <div class="pa-2">
        <img
          src="/images/logo.svg"
          alt="logo"
          width="100"
        >
      </div>
      <v-divider />
      <v-list>
        <v-list-tile
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="navItem.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="navItem.text" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      fixed
      class="nav"
      color="success"
    >
      <v-toolbar-side-icon
        v-if="!hideDrawer" 
        @click="drawer = !drawer" 
        role="button" 
        aria-label="menu"
      />
      <v-spacer v-if="!hideDrawer" />
      <router-link to="/" class="navbrand">
        <img
          src="/images/logo.svg"
          alt="logo"
          width="100"
        >
      </router-link>
      <v-spacer v-if="hideDrawer" />
      <v-toolbar-items v-if="hideDrawer">
        <v-btn
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          active-class="active--nav"
          flat
        >
          <span>{{ navItem.text }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { navItems } from '@src/data/navItems';

export default {
  data: () => ({
    navItems,
    drawer: false,
  }),
  computed: {
    hideDrawer() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbrand {
  margin-top: 10px;
}

@media only screen and (max-width: 959px) {
  .navbrand {
    align-self: flex-end;
    margin-top: 0;
    img {
      width: 75px;
    }
  }
}
</style>
