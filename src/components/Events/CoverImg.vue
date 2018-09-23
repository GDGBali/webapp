<template>
  <v-img
    class="lazyload"
    :src="imgSrc"
    height="400"
    aspect-ratio="2.75"
  >
    <v-layout
      slot="placeholder"
      fill-height
      align-center
      justify-center
      ma-0
    >
      <v-progress-circular 
        indeterminate 
        color="primary" 
        :size="60"
        :width="6"
      />
    </v-layout>
    <v-layout 
      justify-center 
      align-end
      fill-height 
      class="white--text pb-4 overlay"
    >
      <div 
        class="product-sans text-xs-center eventName primary" 
        :class="[isMobile ? 'headline' : 'display-1']"
      >
        {{ name }}
      </div>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>

<style lang="stylus" scoped>
.eventName {
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.overlay {
  background: rgba(18, 25, 30, 0.2);
}
</style>
