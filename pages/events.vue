<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <h1>Events</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Hero from '~/components/Home/Hero.vue';
export default {
  async fetch({ store }) {
    await store.dispatch('events/getLatestEvents');
  },
  components: {
    Hero
  }
};
</script>
