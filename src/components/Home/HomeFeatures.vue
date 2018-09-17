<template>
  <section>
    <v-container fill-height grid-list-xl>
      <v-layout wrap justify-center>
        <v-flex text-xs-center xs12>
          <div
            :class="textClass"
            class="product-sans"
          >
            {{ $t('features.whatGdg') }}
          </div>
        </v-flex>
        <v-flex text-xs-center xs12 sm7>
          <div class="subheading">
            <div class="mb-5">
              {{ $t('features.welcomeTitle') }}
              <a href="https://developers.google.com/programs/community/gdg/" target="_blank" rel="noopener">
                Google Developer Group (GDG)
              </a>,
              {{ $t('features.welcomeText') }}
            </div>
            <div class="mb-5">
              {{ $t('features.description') }}
            </div>
          </div>
        </v-flex>
        <v-flex text-xs-center xs12 sm10>
          <div :class="textClass" class="product-sans">
            {{ $t('features.whatTodo.title') }}
          </div>
        </v-flex>
        <v-flex
          xs12
          sm6
          md4
          text-xs-center
          v-for="feature in features"
          :key="feature.icon"
        >
          <img :data-src="require(`@assets/icons/${feature.icon}.svg`)" alt="" class="lazyload">
          <div class="display-1 mb-1 product-sans">
            {{ feature.text }}
          </div>
          <div class="subheading">
            {{ feature.description }}
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
    features() {
      return [
        {
          icon: 'learn',
          text: 'Learn',
          description: this.$i18n.t('features.whatTodo.learn'),
        },
        {
          icon: 'build',
          text: 'Build',
          description: this.$i18n.t('features.whatTodo.build'),
        },
        {
          icon: 'share',
          text: 'Share',
          description: this.$i18n.t('features.whatTodo.share'),
        },
        {
          icon: 'connect',
          text: 'Connect',
          description: this.$i18n.t('features.whatTodo.connect'),
        },
        {
          icon: 'organize',
          text: 'Organize',
          description: this.$i18n.t('features.whatTodo.organize'),
        },
        {
          icon: 'fun',
          text: 'Have Fun',
          description: this.$i18n.t('features.whatTodo.haveFun'),
        },
      ];
    },
    textClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3';
    },
  },
};
</script>
