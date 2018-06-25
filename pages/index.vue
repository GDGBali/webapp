<template>
  <div>
    <Hero />
    <Features />
    <NextEvent />
  </div>
</template>

<script>
import Hero from '~/components/Home/Hero.vue';
import Features from '~/components/Home/Features.vue';
import NextEvent from '~/components/Home/NextEvent.vue';
export default {
  components: {
    Hero,
    Features,
    NextEvent
  },
  computed: {
    textClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3';
    }
  },
  methods: {
    getImg() {
      return require('~/assets/images/events.jpg');
    }
  }
};
</script>
