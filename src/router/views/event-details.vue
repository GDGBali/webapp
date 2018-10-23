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
import EventDetails from '@components/Events/EventDetails';
import apiActions from '@api/apiActions';
import { mapGetters } from 'vuex';

export default {
  metaInfo: {
    title: 'Events',
  },
  components: {
    EventDetails,
  },
  created() {
    apiActions.requestSingleEvent(this.$store, this.$route.params.slugUrl);
  },
  computed: {
    ...mapGetters(['eventDetails']),
    event() {
      return this.eventDetails(this.$route.params.slugUrl);
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
