<template>
  <v-app>
    <BaseNavbar />
    <v-content>
      <slot />
    </v-content>
    <BaseFooter />
    <BaseSnackbar/>
  </v-app>
</template>

<script>
export default {};
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
