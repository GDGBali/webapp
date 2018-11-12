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
    <div v-else-if="$store.state.events.error">
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
import { FETCH_SINGLE_EVENT } from '@state/networkTypes';

export default {
  metaInfo() {
    return {
      title: (this.event || {}).name,
      meta: [
        {
          property: 'og:title',
          vmid: 'og:title',
          content: (this.event || {}).name,
        },
        {
          property: 'og:description',
          vmid: 'og:description',
          content: `Kami mengundang semua software developer dari berbagai kalangan baik kalian yang sudah berpengalaman atau baru ingin terjun ke dunia pemrograman. Manfaatkan momen ini untuk bertemu dengan orang-orang baru, siapa tahu bisa merubah jenjang karir kalian.`,
        },
        {
          property: 'og:image',
          vmid: 'og:image',
          content: `https://res.cloudinary.com/gdgbali/image/upload/f_auto/v1541565797/hero.jpg`,
        },
      ],
    };
  },
  components: {
    EventDetails,
  },
  created() {
    const { slugUrl } = this.$route.params;
    this.$store.dispatch(FETCH_SINGLE_EVENT, { slugUrl });
  },
  computed: {
    event() {
      return this.$store.state.events.singleEvent;
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
