<template>
  <v-app>
    <Navbar />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import GdgIcon from '~/components/Icons/GdgIcon.vue';

export default {
  components: {
    Navbar,
    Footer,
    GdgIcon
  }
};
</script>

<style lang="scss">
nav {
  z-index: 3 !important;
}
footer {
  color: #cfd8dc !important;
  background: #303c42 !important;
  img {
    width: 24px;
    margin-right: 10px;
  }
}
</style>
