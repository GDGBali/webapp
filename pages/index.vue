<template>
  <!-- <v-container fluid >
    <v-layout id="hero" column justify-center align-center>
      <v-flex xs12>
        <div>
          
        </div>
      </v-flex>
    </v-layout>
  </v-container> -->
  <div>
    <progressive-img
      src="https://unsplash.it/1920/1080?image=10"
      placeholder="https://unsplash.it/1920/1080?image=10"
      @onLoad="onLoad"
      @onLoadPlaceholder="onLoadPlaceholder"
      @onError="onError"
      @onErrorPlaceholder="onErrorPlaceholder"
    />
  </div>
  
</template>

<script>
export default {
  methods: {
    onLoad() {
      // main image is loaded
      console.log('loaded');
    },
    onLoadPlaceholder() {
      // placeholder image is loaded
    },
    onError(error) {
      console.log(error);
      // main image error
    },
    onErrorPlaceholder(error) {
      console.log(error);
      // placeholder image error
    }
  }
};
</script>


<style scoped>
@media (min-height: 500px) {
  #hero {
    height: calc(100% + 57px);
    max-height: calc(100vh + 1px);
  }
}

@media (min-width: 812px) {
  #hero {
    height: calc(100% + 65px);
  }
}
#hero {
  /* background-color: #673ab7; */
  /* background-image: url('~/assets/images/home.jpg'); */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
