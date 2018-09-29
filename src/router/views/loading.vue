<template>
  <transition appear>
    <v-layout wrap class="mt-3">
      <v-flex class="text-xs-center" xs12>
        <v-progress-circular
          :size="60"
          :width="6"
          color="primary"
          indeterminate
        />
      </v-flex>
    </v-layout>
  </transition>
</template>

<script>
export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
};
</script>
