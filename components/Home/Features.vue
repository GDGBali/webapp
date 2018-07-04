<template>
  <section>
    <v-container fill-height grid-list-xl>
      <v-layout row wrap justify-center>
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
              <a href="https://developers.google.com/programs/community/gdg/" target="_blank">Google Developer Group (GDG)</a>, 
              {{ $t('features.welcomeText') }}
            </div>
            <div class="mb-5">
              {{ $t('features.description') }}
            </div>
          </div>
        </v-flex>
        <v-flex text-xs-center xs12 sm10>
          <div :class="textClass" class="product-sans">{{ $t('features.whatTodo.title') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/learn.svg" alt="">
          <div class="display-1 mb-1">Learn</div>
          <div class="subheading">{{ $t('features.whatTodo.learn') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/build.svg" alt="">
          <div class="display-1 mb-1">Build</div>
          <div class="subheading">{{ $t('features.whatTodo.build') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/share.svg" alt="">
          <div class="display-1 mb-1">Share</div>
          <div class="subheading">{{ $t('features.whatTodo.share') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/connect.svg" alt="">
          <div class="display-1 mb-1">Connect</div>
          <div class="subheading">{{ $t('features.whatTodo.connect') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/organize.svg" alt="">
          <div class="display-1 mb-1">Organize</div>
          <div class="subheading">{{ $t('features.whatTodo.organize') }}</div>
        </v-flex>
        <v-flex 
          xs12 
          sm6 
          md4 
          text-xs-center>
          <img src="~/assets/icons/fun.svg" alt="">
          <div class="display-1 mb-1">Have Fun</div>
          <div class="subheading">{{ $t('features.whatTodo.haveFun') }}</div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  computed: {
    textClass() {
      return this.$vuetify.breakpoint.smAndDown ? 'display-2' : 'display-3';
    }
  }
};
</script>
