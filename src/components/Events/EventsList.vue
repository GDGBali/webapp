<template>
  <v-layout wrap class="mt-3">
    <v-flex class="text-xs-center" xs12 v-if="isRequesting">
      <v-progress-circular
        :size="60"
        :width="6"
        color="primary"
        indeterminate
      />
    </v-flex>
    <v-flex 
      xs12 
      sm6 
      v-for="event in events"
      :key="event.title"
      v-else
    >
      <EventCard :event="event" />
    </v-flex>
  </v-layout>
</template>

<script>
import EventCard from './EventCard';
import apiActions from '@api/apiActions';

export default {
  components: {
    EventCard,
  },
  created() {
    apiActions.requestFutureEvents(this);
  },
  data: () => ({
    show: false,
  }),
  computed: {
    events() {
      return this.$store.state.events.future;
    },
    isRequesting() {
      return this.$store.state.events.isRequesting;
    },
  },
};
</script>
