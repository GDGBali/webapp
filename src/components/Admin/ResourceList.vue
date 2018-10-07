<template>
  <v-layout justify-center>
    <div class="display-1">
      {{ title }}
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
        :to="addHref"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    addHref: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.addBtn {
  right: 50px;
  bottom: 50px;
}
</style>
