<template>
  <section>
    <v-container grid-list-xl>
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
      </v-layout>
    </v-container>
    <v-container style="position: relative">
      <div>
        <swiper :options="swiperOption">
          <swiperSlide 
            v-for="feature in features"
            :key="feature.icon"
          >
            <div 
              class="text-xs-center"
              :class="[isMobile ? 'mb-4' : 'px-5']"
            >
              <div>
                <img :data-src="require(`@assets/icons/${feature.icon}.svg`)" alt="" class="lazyload">
              </div>
              <div class="display-1 mb-1 product-sans">
                {{ feature.text }}
              </div>
              <div class="subheading">
                {{ feature.description }}
              </div>
            </div>
          </swiperSlide>
          <div class="swiper-button-prev" slot="button-prev" />
          <div class="swiper-button-next" slot="button-next" />
          <div class="swiper-pagination" slot="pagination" />
        </swiper>
      </div>
    </v-container>
  </section>
</template>

<script>
import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        grabCursor: true,
        breakpoints: {
          1024: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
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
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
<style >
.swiper-button-prev,
.swiper-button-next {
  top: 15%;
}

a {
  color: #00ffdf;
}
</style>
