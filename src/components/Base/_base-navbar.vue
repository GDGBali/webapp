<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :app="notRootPath"
      color="white"
      fixed
      class="nav">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-spacer class="hidden-md-and-up" />
      <router-link to="/" class="navbrand">
        <img
          src="@assets/icons/logo.svg"
          alt="logo"
          width="100"
          class="mx-4">
      </router-link>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.routeName"
          active-class="active--nav"
          exact
          flat>
          <span>{{ navItem.text }}</span>
        </v-btn>
        <!-- <v-btn
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="localePath(navItem.routeName)"
          active-class="active--nav"
          exact
          flat>
          <span>{{ navItem.text }}</span>
        </v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { navItems } from '@/data/navItems';

const isNotRootPath = path => path !== '/';

export default {
  data: () => ({
    navItems,
    drawer: false,
    items: [
      { icon: 'apps', title: 'Welcome', to: '/' },
      { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
    ],
  }),
  computed: {
    notRootPath() {
      return isNotRootPath(this.$route.path);
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
