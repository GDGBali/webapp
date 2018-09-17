<template>
  <v-layout wrap justify-center>
    <v-flex xs12 sm4>
      <v-img
        class="lazyload"
        :src="event.coverImgUrl"
      />
    </v-flex>
    <v-flex xs12 sm9>
      <v-layout wrap>
        <FabOrange icon="event" content="22 July 2018" />
        <FabOrange icon="directions" content="Kembali Innovation Hub" />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import FabOrange from './FabOrange';
export default {
  components: {
    FabOrange,
  },
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
