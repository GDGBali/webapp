<template>
  <div class="pa-2">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm8 md4>
          <div>
            <img src="@assets/icons/io18.svg" alt="">
          </div>
          <div>
            <v-btn 
              fab 
              dark 
              small 
              color="orange accent-4">
              <v-icon>event</v-icon>
            </v-btn>
            22 July 2018
          </div>
          <div>
            <v-btn
              href="https://goo.gl/maps/UznLp1j1C8z"
              target="_blank"
              fab
              dark
              small
              color="orange accent-4">
              <v-icon>directions</v-icon>
            </v-btn>
            Kembali Innovation Hub
          </div>
        </v-flex>
        <v-flex xs12 class="mt-5">
          <div class="display-3 product-sans">
            Schedule
          </div>
          <v-container fluid grid-list-xl>
            <v-layout
              v-for="item in schedules"
              :key="item.title"
              row
              wrap>
              <v-flex
                xs3
                sm2
                md1
                class="title product-sans">
                {{ item.time }}
              </v-flex>
              <v-flex
                xs9
                sm10
                md11
                class="subheading product-sans">
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
                <v-divider />
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
.header {
  color: #bababa;
}
</style>
