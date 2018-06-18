<template>
  <v-app>
    <Navbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto" class="footer">
      <v-container grid-list-xl>
        <v-layout 
          row 
          wrap 
          align-center 
          justify-space-between>
          <v-flex xs4 sm2>
            <GdgIcon />
          </v-flex>
          <v-flex xs5 class="text-xs-right">
            <!-- <div> -->
            <a href="meetup.com"><img src="~/assets/images/meetup.svg" alt=""></a>
            <a href="google.com"><img src="~/assets/images/gplus.svg" alt=""></a>
            <a href="facebook.com"><img src="~/assets/images/facebook.svg" alt=""></a>
            <a href="instagram.com"><img src="~/assets/images/instagram.svg" alt=""></a>
            <!-- </div> -->
          </v-flex>
          <v-flex xs12>
            <div class="caption text-xs-right">
              Designed by Prabu Rangki.
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import GdgIcon from '~/components/Icons/GdgIcon.vue';

export default {
  components: {
    Navbar,
    GdgIcon
  }
};
</script>

<style lang="scss">
nav {
  z-index: 3 !important;
}
footer {
  color: #cfd8dc !important;
  background: #303c42 !important;
  img {
    width: 24px;
    margin-right: 10px;
  }
}
</style>
