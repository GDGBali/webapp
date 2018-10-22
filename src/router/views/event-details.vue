<template>
  <ApolloQuery
    :query="require('@queries/events/EventDetails.gql')"
    :variables="{
      slugurl: $route.params.slugUrl
    }"
    @result="onResult"
  >
    <template slot-scope="{ result: { loading, error, data }, isLoading }">
      <div class="text-xs-center" style="height: 50vh" v-if="isLoading">
        <v-container fill-height>
          <v-layout align-center justify-center>
            <v-progress-circular
              :size="60"
              :width="6"
              color="primary"
              indeterminate
            />
          </v-layout>
        </v-container>
      </div>
      <div v-else-if="error">
        <v-container fill-height>
          <v-layout align-center justify-center>
            Event not found
          </v-layout>
        </v-container>
      </div>
      <EventDetails :event="event" v-else />
    </template>
  </ApolloQuery>
</template>

<script>
import EventDetails from '@components/Events/EventDetails';

export default {
  metaInfo: {
    title: 'Events',
  },
  components: {
    EventDetails,
  },
  data: () => ({
    show: false,
    event: {},
  }),
  methods: {
    onResult({ data: { eventDetails } }) {
      this.event = eventDetails;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  color: #bababa;
}
.teleImg {
  max-width: 50px;
}
</style>
