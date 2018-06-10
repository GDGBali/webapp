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
      :color="toolbarColor" 
      :flat="flatToolbar"
      :app="notRootPath"
      :dark="!notRootPath"
      fixed>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer" />
      <v-spacer class="hidden-md-and-up" />
      <nuxt-link to="/" class="mt-3">
        <img
          src="~/assets/images/logo.svg"
          alt="logo"
          width="100"
          height="80"
          class="mx-4">
      </nuxt-link>
      <v-spacer class="hidden-sm-and-down" />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="navItem in navItems"
          :key="navItem.text"
          :to="navItem.link"
          active-class="active--nav"
          flat>
          <span>{{ navItem.text }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { navItems } from '~/data/navItems';
import GdgLogo from '~/components/Icons/GdgLogo.vue';

const isNotRootPath = path => path !== '/';

export default {
  components: {
    GdgLogo
  },
  data: () => ({
    navItems,
    drawer: false,
    items: [
      { icon: 'apps', title: 'Welcome', to: '/' },
      { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
    ],
    // toolbarColor: 'transparent',
    flatToolbar: true
  }),
  computed: {
    notRootPath() {
      return isNotRootPath(this.$route.path);
    },
    toolbarColor() {
      return isNotRootPath(this.$route.path) ? '' : 'transparent';
    }
  },
  methods: {
    onScroll(e) {
      // const offsetTop = window.pageYOffset || document.documentElement.scrollTop
      const offsetTop = e.target.scrollTop;

      if (offsetTop > 100) {
        this.toolbarColor = 'white';
        this.flatToolbar = false;
      } else {
        this.toolbarColor = 'transparent';
        this.flatToolbar = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
