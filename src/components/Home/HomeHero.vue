<template>
  <v-img
    :src="require('@assets/images/hero.jpg')"
    :lazy-src="require('@assets/images/hero_blur.jpg')"
    id="hero"
  >
    <div class="heroOverlay" />
    <v-container fill-height class="heroContent">
      <v-layout align-center>
        <v-flex xs12>
          <v-container>
            <v-layout
              wrap
              justify-center
              align-center
            >
              <v-flex xs12 sm8 text-xs-center>
                <GdgIcon id-attr="hero" />
              </v-flex>
              <v-flex xs12 text-xs-center>
                <div class="mt-5">
                  <v-btn 
                    to="/events" 
                    class="primary--text" 
                    light 
                    round
                  >
                    <v-icon left>
                      local_activity
                    </v-icon>
                    Events
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
import GdgIcon from '@components/GdgIcon';

export default {
  components: {
    GdgIcon,
  },
  computed: {
    event() {
      return this.$store.state.events.latestEvent;
    },
  },
};
</script>


<style lang="scss" scoped>
@media (min-height: 500px) {
  #hero {
    height: calc(100% + 57px) !important;
    max-height: calc(100vh + 1px);
  }
}

@media (min-width: 812px) {
  #hero {
    height: calc(100% + 65px);
  }
}

#hero {
  position: relative;
  min-height: 100vh;
  background-image: url('~@assets/images/hero_blur.jpg');
}

.heroContent {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
}

.heroOverlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
