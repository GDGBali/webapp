<template>
  <v-flex xs12>
    <div 
      class="product-sans"
      :class="[isMobile ? 'display-1' : 'display-2']"
    >
      Schedule
    </div>
    <v-container fluid grid-list-xl>
      <v-layout
        v-for="item in schedules"
        :key="item.title"
        wrap
      >
        <v-flex 
          class="product-sans shrink"
          :class="[isMobile ? 'headline' : 'display-1']"
        >
          {{ item.time }}
        </v-flex>
        <v-flex>
          <v-layout 
            column 
            fill-height 
            justify-center
            class="ma-0"
            v-if="!item.isParallel"
          >
            <div class="title product-sans">
              {{ item.title }}
            </div>
            <div class="subheading mt-2" v-if="item.speaker">
              {{ item.speaker }}
            </div>
          </v-layout>
          <div 
            v-for="multi in item.items" 
            :key="multi.id" 
            class="mb-4" 
            v-else
          >
            <div class="title product-sans">
              {{ multi.title }}
            </div>
            <div class="subheading mt-2">
              {{ multi.speaker }}
            </div>
          </div>
        </v-flex>
        <v-flex xs12>
          <VDivider />
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      default: () => [],
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
.description {
  white-space: pre-line;
}
</style>
