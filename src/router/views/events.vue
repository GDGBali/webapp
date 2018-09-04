<template>
  <VContainer grid-list-xl>
    <VLayout row wrap>
      <VFlex xs12>
        <h1 class="product-sans mb-5 text-xs-center">
          Events
        </h1>
      </VFlex>
    </VLayout>
    <VLayout row wrap>
      <FutureEvents
        v-for="event in events"
        :key="event.title"
        :event="event"
      />
    </VLayout>
  </VContainer>
</template>

<script>
import appConfig from '@src/app.config';
import FutureEvents from '@components/Events/FutureEvents';

export default {
  metaInfo: {
    title: 'Events',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    FutureEvents,
  },
  computed: {
    events() {
      return [
        {
          title: 'Google I/O 2018 Extended',
          description: this.$i18n.t('events.io.description'),
          imgSrc: require('@assets/images/events/ioStage.jpeg'),
          details: true,
        },
        {
          title: 'GDG Meetup Workbox',
          description: this.$i18n.t('events.workbox.description'),
          imgSrc: require('@assets/images/events/workbox.png'),
          details: false,
          imgContain: true,
        },
        {
          title: 'Flutter Study Jam',
          description: this.$i18n.t('events.flutter.description'),
          imgSrc: require('@assets/images/events/flutter.jpg'),
          details: false,
          imgContain: true,
        },
        {
          title: 'DevFest 2018',
          description: this.$i18n.t('events.devfest.description'),
          imgSrc: require('@assets/images/events/devfest.jpg'),
          details: false,
        },
      ];
    },
  },
};
</script>
