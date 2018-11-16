<template>
  <div>
    <HomeHero />
    <HomeFeatures />
    <HomeNextEvent />
  </div>
</template>

<script>
import HomeHero from '@components/Home/HomeHero';
import HomeFeatures from '@components/Home/HomeFeatures';
import HomeNextEvent from '@components/Home/HomeNextEvent';

export default {
  metaInfo: {
    meta: [
      {
        name: 'description',
        content: `Komunitas di Bali yang tertarik dengan hal-hal yang berhubungan dengan software development.
          Walaupun kami lebih fokus dengan produk-produk yang disediakan oleh Google, 
          kami tidak menutup kemungkinan untuk membahasa teknologi lainnya.`,
      },
    ],
  },
  components: { HomeHero, HomeFeatures, HomeNextEvent },
};
</script>
