<template>
  <v-layout :column="isColumn" align-center class="title flex sm6 xs12">
    <v-btn 
      fab 
      dark 
      small 
      color="orange accent-4"
      :class="{'mb-3': isColumn }"
      target="_blank"
      :href="href"
      :disabled="tbd"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <slot />
  </v-layout>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    tbd: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isColumn() {
      return !this.$vuetify.breakpoint.xsOnly;
    },
    hasLinks() {
      return this.href !== '';
    },
  },
};
</script>
