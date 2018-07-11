<template>
  <Layout>
    <HomeHero/>
    <HomeFeatures/>
  </Layout>
</template>

<script>
import appConfig from '@src/app.config';
import Layout from '@layouts/main';
import HomeHero from '@components/Home/HomeHero';
import HomeFeatures from '@components/Home/HomeFeatures';
import HomeNextEvent from '@components/Home/HomeNextEvent';

export default {
  metaInfo: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, HomeHero, HomeFeatures, HomeNextEvent },
};
</script>
