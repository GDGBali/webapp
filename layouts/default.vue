<template>
  <v-app>
    <Navbar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
};
</script>

<style>
nav {
  z-index: 3 !important;
}
</style>
