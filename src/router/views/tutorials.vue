<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <h1 class="product-sans">Tutorials</h1>
          <i18n
            path="tutorials.title"
            tag="div"
            class="body-2"
            v-html="$t('tutorials.title')" />
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="text-xs-center mb-4">
          <i18n
            path="tutorials.submit"
            tag="div"
            class="body-2"
            v-html="$t('tutorials.submit')" />
          <v-btn round color="primary" dark>Request</v-btn>
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
    title: 'Tutorials',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    ComingSoon,
  },
};
</script>
