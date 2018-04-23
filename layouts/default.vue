<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
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
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :color="toolbarColor" :flat="flatToolbar" :clipped-left="clipped" app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"/>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          Home
        </v-btn>
        <v-btn flat>
          Link 1
        </v-btn>
        <v-btn flat>
          Link 2
        </v-btn>
        <v-btn flat>
          Link 3
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-content> -->
    <nuxt />
    <!-- </v-content> -->
    <v-footer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      toolbarColor: 'transparent',
      flatToolbar: true
    };
  },
  methods: {
    onScroll(e) {
      // const offsetTop = window.pageYOffset || document.documentElement.scrollTop
      const offsetTop = e.target.scrollTop;
      console.log(offsetTop);

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
