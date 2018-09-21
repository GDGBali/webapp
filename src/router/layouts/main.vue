<template>
  <v-app dark>
    <NavBar />
    <v-content>
      <slot />
    </v-content>
    <MainFooter />
    <BaseSnackbar />
  </v-app>
</template>

<script>
import NavBar from '@components/NavBar';
import MainFooter from '@components/Footer';

export default {
  components: {
    NavBar,
    MainFooter,
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
