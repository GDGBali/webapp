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
        <v-flex xs12 class="mt-5">
          <v-layout justify-space-between align-center>
            <div class="display-3 product-sans">
              Schedule
            </div>
            <v-btn color="primary">
              join
            </v-btn>
          </v-layout>
          <v-container fluid grid-list-xl>
            <v-layout
              v-for="item in schedules"
              :key="item.title"
              row
              wrap
            >
              <v-flex
                xs3
                sm2
                md1
                class="title product-sans"
              >
                {{ item.time }}
              </v-flex>
              <v-flex
                xs9
                sm10
                md11
                class="subheading product-sans"
              >
                <div>
                  {{ item.title }}
                </div>
                <div class="body-2">
                  {{ item.speaker }}
                </div>
                <div v-for="codelab in item.codelabs" :key="codelab.title" class="mt-3">
                  <div>
                    {{ codelab.title }}
                  </div>
                  <div class="body-2">
                    {{ codelab.speaker }}
                  </div>
                </div>
              </v-flex>
              <v-flex xs12>
                <VDivider />
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import FabOrange from './FabOrange';
import CoverImg from './CoverImg';
export default {
  components: {
    FabOrange,
    CoverImg,
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
          title: 'Building App Using Kotlin',
          speaker: 'Wayan Dharmana',
        },
        { time: '10:30', title: 'Ice Breaker' },
        {
          time: '10:35',
          title: 'Journey with Flutter & Dart',
          speaker: 'Asep Bagja',
        },
        {
          time: '11:05',
          title: 'Tensor Flow & ML Kit',
          speaker: 'Sidiq Permana',
        },
        { time: '11:35', title: 'Lunch Break' },
        {
          time: '12:35',
          title: 'Build the Future of Web',
          speaker: 'Prabu Rangki',
        },
        { time: '13:05', title: 'Networking' },
        {
          time: '13:25',
          title: 'Codelabs',
          isCodelabs: true,
          codelabs: [
            { title: 'Using Workbox with ReactJS', speaker: 'Prabu Rangki' },
            { title: 'ML Kit', speaker: 'Sidiq Permana' },
          ],
        },
      ],
    };
  },
};
</script>
