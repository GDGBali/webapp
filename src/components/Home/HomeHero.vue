<template>
  <section v-lazy:background-image="require('@assets/images/hero.jpg')" id="hero" data-imgname="hero">
    <div class="heroOverlay" />
    <v-container fill-height class="heroContent">
      <v-layout align-center>
        <v-flex xs12>
          <v-container>
            <v-layout
              row
              wrap
              justify-center
              align-center>
              <v-flex xs12 sm8 text-xs-center>
                <GdgIcon />
              </v-flex>
              <v-flex xs12 text-xs-center>
                <div class="mt-5">
                  <v-btn to="/events" class="primary--text">
                    <v-icon left>local_activity</v-icon>
                    Events
                  </v-btn>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
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
  background-color: #008080;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
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
