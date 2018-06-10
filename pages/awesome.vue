<template>
  <div>
    <h1>Awesome</h1>
  </div>
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
