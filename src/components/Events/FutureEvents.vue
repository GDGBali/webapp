<template>
  <VFlex xs12 sm6>
    <VCard>
      <div class="v-card__media" style="height: 200px">
        <div 
          class="v-card__media__background lazyload" 
          :data-bg="event.imgSrc"
          :style="`background: center center / ${containImg(event.imgContain)} no-repeat`"
        />
      </div>
      <VCardTitle primary-title>
        <div class="headline">
          {{ event.title }}
        </div>
      </VCardTitle>
      <VCardActions>
        <VBtn
          v-if="event.details"
          flat
          to="/events/io18"
          color="primary"
        >
          <VIcon left>
            info
          </VIcon>
          Details
        </VBtn>
        <VBtn
          v-else
          flat
          disabled
        >
          <VIcon left>
            info
          </VIcon>
          TBA
        </VBtn>
        <VSpacer />
        <VBtn flat @click="show = !show">
          info
          <VIcon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</VIcon>
        </VBtn>
      </VCardActions>

      <VSlideYTransition>
        <VCardText v-show="show">
          {{ event.description }}
        </VCardText>
      </VSlideYTransition>
    </VCard>
  </VFlex>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    show: false,
  }),
  methods: {
    containImg(imgContain) {
      return imgContain ? 'contain' : 'cover';
    },
  },
};
</script>
