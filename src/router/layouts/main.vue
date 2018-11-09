<template>
  <v-app dark>
    <NavBar />
    <v-content>
      <slot />
    </v-content>
    <MainFooter />
    <BaseSnackbar />
    <AuthDialog />
  </v-app>
</template>

<script>
const NavBar = () =>
  import(/* webpackChunkName: "navbar" */ '@components/NavBar');

const MainFooter = () =>
  import(/* webpackChunkName: "footer" */ '@components/Footer');

const AuthDialog = () =>
  import(/* webpackChunkName: "auth-dialog" */ '@components/Auth/AuthDialog');

const BaseSnackbar = () =>
  import(/* webpackChunkName: "snackbar" */ '@components/Base/BaseSnackbar');

export default {
  components: {
    NavBar,
    AuthDialog,
    MainFooter,
    BaseSnackbar,
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
