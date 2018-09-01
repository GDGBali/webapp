<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <h1 class="product-sans">Showcase</h1>
          <i18n
            path="showcase.title"
            tag="div"
            class="body-2"
            v-html="$t('showcase.title')" />
        </div>
      </v-flex>

      <coming-soon />

    </v-layout>
  </v-container>
</template>

<script>
import appConfig from '@src/app.config';
import ComingSoon from '@components/shared/ComingSoon';

export default {
  metaInfo: {
    title: 'Showcase',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    ComingSoon,
  },
};
</script>
