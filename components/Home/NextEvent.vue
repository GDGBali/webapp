<template>
  <section v-lazy:background-image="require('~/assets/images/events.jpg')" id="events" data-imgname="events">
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="product-sans display-2 white--text">{{ $t('events.next') }}</div>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title>
              <div class="headline mb-0 product-sans">Google I/O 2018 Extended</div>
              <div class="body-1 mt-3">{{ $t('events.io.description') }}</div>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-icon left class="mr-2">location_on</v-icon>
                  Kembali Innovation Hub
                </v-flex>
                <v-flex xs12>
                  <v-icon left class="mr-2">event</v-icon>
                  Sat Jun 23 2018, 8:00:00 AM
                </v-flex>
                <v-flex xs12>
                  <v-icon left class="mr-2">people</v-icon>
                  20 attending members
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-actions class="justify-end">
              <v-btn to="/events/io18" color="primary">
                <v-icon left>local_activity</v-icon>
                Join
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  methods: {
    getImg() {
      return require('~/assets/images/events.jpg');
    }
  }
};
</script>

<style scoped>
#events {
  background-color: #008080;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
