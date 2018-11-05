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
    <v-flex xs12 v-else-if="events.length === 0">
      <h1 class="text-xs-center">
        Coming Soon
      </h1>
    </v-flex>
    <v-flex 
      xs12 
      sm6 
      v-for="event in events"
      :key="event.id"
      v-else
    >
      <EventCard :event="event" />
    </v-flex>
  </v-layout>
</template>

<script>
import EventCard from './EventCard';
import { FETCH_MULTI_EVENT } from '@state/networkTypes';

export default {
  components: {
    EventCard,
  },
  props: {
    startsAt: {
      type: String,
      default: '',
    },
  },
  created() {
    const { startsAt } = this;
    this.$store.dispatch(FETCH_MULTI_EVENT, { startsAt });
  },
  data: () => ({
    show: false,
  }),
  computed: {
    events() {
      const { events } = this.$store.state;
      return this.startsAt === 'future' ? events.future : events.past;
    },
    isRequesting() {
      return this.$store.state.events.isRequesting;
    },
  },
};
</script>
