<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h1 class="product-sans mb-5 text-xs-center">
          Events
          {{ eventsTab }}
        </h1>
        <v-tabs
          centered 
          grow 
          color="primary"
          dark
          slider-color="secondary"
          v-model="eventsTab"
        >
          <v-tab ripple>
            Future
          </v-tab>
          <v-tab ripple>
            Past
          </v-tab>
          <v-tab ripple>
            All
          </v-tab>

          <v-tab-item lazy id="future-events">
            <EventsList />
          </v-tab-item>
          <v-tab-item lazy id="past-events">
            <EventsList when="past" />
          </v-tab-item>
          <v-tab-item lazy id="all-events">
            <EventsList when="all" />
          </v-tab-item>
        </v-tabs>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appConfig from '@src/app.config';
import EventsList from '@components/Events/EventsList';

export default {
  metaInfo: {
    title: 'Events',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    EventsList,
  },
  data: () => ({
    eventsTab: 'future',
  }),
};
</script>
