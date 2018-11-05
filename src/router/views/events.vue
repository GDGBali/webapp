<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex xs12>
        <h1 class="product-sans mb-3 text-xs-center">
          Events
        </h1>
        <v-tabs
          color="primary"
          dark
          slider-color="white"
          fixed-tabs
        >
          <v-tab ripple>
            Next Events
          </v-tab>
          <v-tab ripple>
            Past Events
          </v-tab>
          <v-tab ripple>
            Submissions
          </v-tab>
          <!-- Next -->
          <v-tab-item lazy>
            <EventsList starts-at="future" />
          </v-tab-item>
          <!-- Past -->
          <v-tab-item lazy>
            <EventsList starts-at="past" />
          </v-tab-item>
          <!-- Submissions -->
          <v-tab-item lazy>
            <div class="mt-3">
              <TopicSubmission />
              <div class="text-xs-center">
                <hr class="divider">
              </div>
              <SpeakerSubmission />
            </div>
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appConfig from '@src/app.config';
import EventsList from '@components/Events/EventsList';
import TopicSubmission from '@components/Submissions/Topic';
import SpeakerSubmission from '@components/Submissions/Speaker';

export default {
  metaInfo: {
    title: 'Events',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    EventsList,
    TopicSubmission,
    SpeakerSubmission,
  },
  data: () => ({
    eventsTab: 'future',
  }),
};
</script>


<style lang="stylus" scoped>
.divider {
  width: 60px;
  height: 8px;
  margin: 35px auto;
  background: #009688;
  border: none;
  border-radius: 10px;
}
</style>
