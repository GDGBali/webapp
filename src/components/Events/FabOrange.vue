<template>
  <v-layout :column="isColumn" align-center class="title flex sm6 xs12">
    <v-btn 
      fab 
      dark 
      small 
      color="orange accent-4"
      :class="{'mb-3': isColumn }"
    >
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    {{ content }}
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
  },
  computed: {
    isColumn() {
      return !this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
