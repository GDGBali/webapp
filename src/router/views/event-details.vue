<template>
  <div>
    <div class="text-xs-center" style="height: 50vh" v-if="isRequesting">
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
    <div v-else-if="event.error">
      <v-container fill-height>
        <v-layout align-center justify-center>
          Event not found
        </v-layout>
      </v-container>
    </div>
    <EventDetails :event="event" v-else />
  </div>
</template>

<script>
import { EVENTS_REQ_START } from '@state/networkTypes';
import EventDetails from '@components/Events/EventDetails';

export default {
  metaInfo: {
    title: 'Events',
  },
  components: {
    EventDetails,
  },
  created() {
    this.$store.dispatch(EVENTS_REQ_START, {
      endpoint: `/events/${this.$route.params.slug_url}`,
      verb: 'GET_SINGLE',
    });
  },
  computed: {
    event() {
      return this.$store.state.events.details;
    },
    isRequesting() {
      return this.$store.state.events.isRequesting;
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
