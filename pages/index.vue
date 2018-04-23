<template>
  <!-- <v-container fluid > -->
  <v-layout id="hero" column justify-center align-center>
    <v-flex xs12>
      <div id="hero2" />
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
</template>

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
  background-color: #673ab7;
  background-image: url('~/assets/images/home.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
