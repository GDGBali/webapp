<template>
  <v-container grid-list-xl>
    <v-layout wrap justify-center>
      <v-flex xs12>
        <h1 class="product-sans mb-5 text-xs-center">
          Next Events
        </h1>
        <EventsList />
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
