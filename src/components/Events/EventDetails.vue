<template>
  <div>
    <CoverImg :img-src="event.coverImgUrl" :name="event.name" />
    <v-card>
      <v-container>
        <v-layout wrap justify-center>
          <v-flex xs12 sm9>
            <v-layout wrap v-if="event.startsAt">
              <FabOrange icon="event">
                {{ event.startsAt | date }}
              </FabOrange>
              <FabOrange icon="directions">
                {{ (event.venue || {}).name || 'TBA' }}
              </FabOrange>
            </v-layout>
            <v-layout wrap v-else>
              <FabOrange icon="event" tbd>
                TBD
              </FabOrange>
              <FabOrange icon="directions" tbd>
                TBD
              </FabOrange>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <div v-html="event.description" class="description mt-5 subheading" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-container>
      <v-layout wrap justify-center>
        <v-flex 
          xs12 
          sm3 
          class="text-xs-center my-4"
        > 
          <v-btn 
            color="primary" 
            large 
            block
            @click="registerDialog = true"
          >
            join event
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-tabs
      color="primary"
      dark
      slider-color="white"
      fixed-tabs
    >
      <v-tab ripple>
        Speakers
      </v-tab>
      <v-tab ripple>
        Schedule
      </v-tab>
      <!-- SPEAKERS -->
      <v-tab-item>
        <Speakers :speakers="speakers" />
      </v-tab-item>
      <!-- SCHEDULE -->
      <v-tab-item>
        <Schedule :starts-at="event.startsAt" :sessions="event.sessions" />
      </v-tab-item>
    </v-tabs>
    <Register :register-dialog.sync="registerDialog" :event-id="event.id" />
  </div>
</template>

<script>
import formatDate from '@utils/filter';
import Register from './Register';
import FabOrange from './FabOrange';
import CoverImg from './CoverImg';
import Schedule from './Schedule';
import Speakers from './Speakers';
import { mapGetters } from 'vuex';

export default {
  components: {
    Register,
    FabOrange,
    CoverImg,
    Schedule,
    Speakers,
  },
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    registerDialog: false,
    searchName: '',
    notes: [],
  }),
  computed: {
    ...mapGetters(['eventSpeakers']),
    speakers() {
      return this.eventSpeakers(this.event);
    },
  },
  filters: {
    date: value => formatDate(value),
  },
};
</script>

<style lang="stylus" scoped>
.description {
  max-width: 670px;
  margin: 0 auto;
  text-align: center;
  white-space: pre-line;

  >>> a {
    color: #00ffdf;
  }
}

.imgIcons {
  width: 24px;
  margin-right: 8px;
}

.cardContainer {
  background: #303c42;
}
</style>
