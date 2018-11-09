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
              <a 
                href="https://developers.google.com/programs/community/gdg/" 
                target="_blank" 
                rel="noopener" 
                class="anchorText"
              >
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
    <v-container>
      <div class="sliderContainer mb-3">
        <vue-tiny-slider v-bind="tinySliderOptions">
          <div 
            v-for="feature in features"
            :key="feature.icon"
          >
            <div 
              class="text-xs-center"
              :class="[isMobile ? 'mb-4' : 'px-5']"
            >
              <div>
                <img 
                  :data-src="require(`@assets/icons/${feature.icon}.svg`)" 
                  alt="" 
                  class="tns-lazy-img"
                >
              </div>
              <div class="display-1 mb-1 product-sans">
                {{ feature.text }}
              </div>
              <div class="subheading">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </vue-tiny-slider>
        <div id="arrowControls">
          <v-btn 
            fab 
            color="primary" 
            absolute 
            class="arrow leftArrow"
          >
            <v-icon>chevron_left</v-icon>
          </v-btn>
          <v-btn 
            fab 
            color="primary" 
            absolute 
            class="arrow rightArrow"
          >
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script>
import 'tiny-slider/src/tiny-slider.scss';

const VueTinySlider = () =>
  import(/* webpackChunkName: "tiny-slider" */ 'vue-tiny-slider');

export default {
  components: {
    VueTinySlider,
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: true,
        items: 1,
        lazyload: true,
        gutter: 20,
        swipeAngle: 45,
        controlsContainer: '#arrowControls',
        responsive: {
          1024: {
            items: 2,
          },
        },
      },
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
<style lang="scss">
.anchorText {
  color: #00ffdf;
}

.sliderContainer {
  position: relative;
  #arrowControls {
    .arrow {
      top: 18px;
      &.leftArrow {
        left: 0;
      }
      &.rightArrow {
        right: 0;
      }

      @media screen and (min-width: 1024px) {
        top: 50%;
        transform: translateY(-50%);

        &.leftArrow {
          left: -50px;
        }
        &.rightArrow {
          right: -50px;
        }
      }
    }
  }
}
</style>
