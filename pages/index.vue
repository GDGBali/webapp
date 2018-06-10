<template>
  <div style="height: 100%;">
    <no-ssr>
      <Hero />
    </no-ssr>
    <section>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <div />
          </v-flex>
        </v-layout>
      </v-container>
    </section>
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
