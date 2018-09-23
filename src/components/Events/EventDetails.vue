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
            <FabOrange icon="directions" :href="event.venue.mapsUrl">
              {{ event.venue.name }}
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
        <v-flex xs12 class="description mt-5 subheading">
          {{ event.description }}
        </v-flex>
        <template v-if="event.startsAt">
          <v-flex xs12 sm3 class="text-xs-center my-4">
            <v-btn color="primary" large="" block>
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
};
</script>

<style lang="stylus" scoped>
.description {
  white-space: pre-line;
}
</style>
