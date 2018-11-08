<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <h1 class="product-sans">
            Tutorials
          </h1>
          <i18n
            path="tutorials.title"
            tag="div"
            class="body-2"
            v-html="$t('tutorials.title')"
          />
        </div>
      </v-flex>
      <ComingSoon />
    </v-layout>
  </v-container>
</template>

<script>
import appConfig from '@src/app.config';
import ComingSoon from '@components/shared/ComingSoon';

export default {
  metaInfo: {
    title: 'Tutorials',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    ComingSoon,
  },
};
</script>
