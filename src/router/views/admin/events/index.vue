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
        to="/kelian/events/new"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import { setPageTitle } from '@utils/adminPage';

export default {
  created() {
    setPageTitle(this, 'Events');
  },
};
</script>


<style lang="stylus" scoped>
.addBtn {
  right: 50px;
  bottom: 50px;
}
</style>
