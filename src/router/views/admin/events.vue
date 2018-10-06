<template>
  <v-layout justify-center>
    <div class="display-1">
      Events
    </div>
    <div>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="secondary"
        class="addBtn"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.addBtn {
  right: 50px;
  bottom: 50px;
}
</style>
