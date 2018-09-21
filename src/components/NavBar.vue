<template>
  <div>
    <VNavigationDrawer
      v-model="drawer"
      v-if="!hideDrawer"
      fixed
    >
      <VList>
        <VListTile
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          exact
        >
          <VListTileAction>
            <VIcon v-html="navItem.icon" />
          </VListTileAction>
          <VListTileContent>
            <VListTileTitle v-text="navItem.text" />
          </VListTileContent>
        </VListTile>
      </VList>
    </VNavigationDrawer>
    <VToolbar
      app
      fixed
      class="nav"
    >
      <VToolbarSideIcon 
        v-if="!hideDrawer" 
        @click="drawer = !drawer" 
        role="button" 
        aria-label="menu"
      />
      <VSpacer v-if="!hideDrawer" />
      <router-link to="/" class="navbrand">
        <img
          src="/images/logo.svg"
          alt="logo"
          width="100"
        >
      </router-link>
      <VSpacer v-if="hideDrawer" />
      <VToolbarItems v-if="hideDrawer">
        <VBtn
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.path"
          active-class="active--nav"
          flat
        >
          <span>{{ navItem.text }}</span>
        </VBtn>
      </VToolbarItems>
    </VToolbar>
  </div>
</template>

<script>
import { navItems } from '@src/data/navItems';

export default {
  data: () => ({
    baseUrl: process.env.BASE_URL,
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
