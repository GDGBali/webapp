<template>
  <div>
    <CoverImg :img-src="event.coverImgUrl" :name="event.name" />
    <v-container>
      <v-layout wrap justify-center>
        <v-flex xs12 sm9>
          <v-layout wrap>
            <FabOrange icon="event">
              {{ event.startsAt | date }}
            </FabOrange>
            <FabOrange icon="directions" :href="event.venue.mapsUrl">
              {{ event.venue.name }}
            </FabOrange>
          </v-layout>
        </v-flex>
        <v-flex xs12 class="description mt-5 subheading">
          {{ event.description }}
        </v-flex>
        <v-flex xs12 sm3 class="text-xs-center my-4">
          <v-btn color="primary" large="" block>
            join event
          </v-btn>
        </v-flex>
        <Schedule :schedules="schedules" />
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
  computed: {
    schedules() {
      const registration = {
        name: 'Registration',
        beginsAt: this.event.startsAt,
      };

      return [registration, ...this.event.sessions];
    },
  },
};
</script>

<style lang="stylus" scoped>
.description {
  white-space: pre-line;
}
</style>
