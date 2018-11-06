<template>
  <v-card class="success">
    <v-container grid-list-xl class="my-5">
      <v-layout wrap>
        <v-flex
          xs6
          sm3
          v-for="speaker in speakers" 
          :key="`speaker-${speaker.id}`"
        >
          <div class="text-xs-center">
            <v-avatar size="128">
              <v-img
                :src="speaker.avatarUrl"
                aspect-ratio="1"
                class="primary"
              />
            </v-avatar>
            <div class="product-sans subheading mt-3">
              {{ speaker.name }}
            </div>
            <div class="caption">
              {{ speaker.institution }}
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    speakers: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
