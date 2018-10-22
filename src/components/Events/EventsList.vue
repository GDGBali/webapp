<template>
  <ApolloQuery
    :query="require('@queries/events/AllEvents.gql')"
    :variables="{
      starts: 'future'
    }"
    @result="onResult"
  >
    <template slot-scope="{ result: { loading, error, data }, isLoading }">
      <v-layout wrap class="mt-3">
        <v-flex class="text-xs-center" xs12 v-if="isLoading">
          <v-progress-circular
            :size="60"
            :width="6"
            color="primary"
            indeterminate
          />
        </v-flex>
        <v-flex 
          v-else-if="data"
          xs12 
          sm6 
          v-for="event in events"
          :key="event.title"
        >
          <EventCard :event="event" />
        </v-flex>
      </v-layout>
    </template>
  </ApolloQuery>
</template>

<script>
import EventCard from './EventCard';

export default {
  components: {
    EventCard,
  },
  data: () => ({
    show: false,
    events: [],
  }),
  methods: {
    onResult({ data: { allEvents } }) {
      this.events = allEvents;
    },
  },
};
</script>
