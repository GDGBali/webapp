<template>
  <section id="hero">
    <progressive-background
      id="bg-hero"
      :src="require('~/assets/images/home.jpg')"
      :blur="30"
      no-ratio
    />
    <div class="hero-overlay"/>
    <v-container fill-height class="hero-content">
      <v-layout align-center>
        <v-flex text-xs-center>
          <div>
            <h3 class="display-3 heading">Custom Colsor</h3>
            <h3 class="display-3">{{ events.title }}</h3>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { events } from '~/data/events.js';
export default {
  data() {
    return {
      events
    };
  }
};
</script>


<style scoped>
.heading {
  font-family: 'Product Sans';
}
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

#bg-hero {
  background-color: #673ab7;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

#hero {
  position: relative;
}

.hero-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.hero-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
}
</style>
