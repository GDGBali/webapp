<template>
  <div>
    <CoverImg :img-src="event.coverImgUrl" :name="event.name" />
    <v-container>
      <v-layout wrap justify-center>
        <v-flex xs12 sm9>
          <v-layout wrap>
            <FabOrange icon="event" content="22 July 2018" />
            <FabOrange icon="directions" content="Kembali Innovation Hub" />
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
  data() {
    return {
      schedules: [
        { time: '09:00', title: 'Registration' },
        { time: '09:30', title: 'Google Keynote', speaker: 'Leonard Papilaya' },
        {
          time: '09:50',
          title: 'Journey at Google I/O',
          speaker: 'Dennis Alund',
        },
        {
          time: '10:00',
          isParallel: true,
          items: [
            {
              title: 'Building App Using Kotlin',
              speaker: 'Wayan Dharmana',
            },
            {
              title: 'Building App Using Jetpack',
              speaker: 'Ketut Sambrag',
            },
          ],
        },
      ],
    };
  },
};
</script>
