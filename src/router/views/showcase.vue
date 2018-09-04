<template>
  <VContainer fluid grid-list-xl>
    <VLayout row wrap justify-center>
      <VFlex xs12>
        <div class="text-xs-center mb-4">
          <h1 class="product-sans">
            Showcase
          </h1>
          <I18n
            path="showcase.title"
            tag="div"
            class="body-2"
            v-html="$t('showcase.title')"
          />
        </div>
      </VFlex>

      <ComingSoon />
    </VLayout>
  </VContainer>
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
