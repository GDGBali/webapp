<template>
  <VApp>
    <BaseNavbar />
    <VContent>
      <slot />
    </VContent>
    <BaseFooter />
    <BaseSnackbar />
  </VApp>
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
