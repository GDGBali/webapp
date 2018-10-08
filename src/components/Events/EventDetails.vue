<template>
  <div>
    <CoverImg :img-src="event.coverImgUrl" :name="event.name" />
    <v-container>
      <v-layout wrap justify-center>
        <v-flex xs12 sm9>
          <v-layout wrap v-if="event.startsAt">
            <FabOrange icon="event">
              {{ event.startsAt | date }}
            </FabOrange>
            <FabOrange icon="directions">
              {{ event.venue.name || 'TBA' }}
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
        <template>
          <v-flex 
            xs12 
            sm3 
            class="text-xs-center my-4"
          > 
            <v-btn 
              color="primary" 
              large 
              block
              @click="registerEvent"
            >
              join event
            </v-btn>
          </v-flex>
          <Schedule :starts-at="event.startsAt" :sessions="event.sessions" />
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import FabOrange from './FabOrange';
import CoverImg from './CoverImg';
import Schedule from './Schedule';
import { IS_LOGGED_IN, SHOW_AUTH_DIALOG } from '@state/mutationTypes';

export default {
  components: {
    FabOrange,
    CoverImg,
    Schedule,
  },
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    searchName: '',
    notes: [],
  }),
  methods: {
    registerEvent() {
      const isLoggedIn = this.$store.getters[`auth/${IS_LOGGED_IN}`];
      const nextRoute = {
        name: 'event-register',
        params: this.$route.params,
      };
      if (isLoggedIn) {
        this.$router.push(nextRoute);
      } else {
        this.$store.commit(SHOW_AUTH_DIALOG, {
          titleText: 'Please Login to Continue',
          redirectTo: nextRoute,
        });
      }
    },
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
