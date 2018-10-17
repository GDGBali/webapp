<template>
  <div>
    <HomeHero />
    <HomeFeatures />
    <HomeNextEvent />
  </div>
</template>

<script>
import appConfig from '@src/app.config';
import HomeHero from '@components/Home/HomeHero';
import HomeFeatures from '@components/Home/HomeFeatures';
import HomeNextEvent from '@components/Home/HomeNextEvent';

export default {
  metaInfo: {
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { HomeHero, HomeFeatures, HomeNextEvent },
};
</script>
