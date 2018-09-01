<script>
export default {
  page: {
    title: '404',
    meta: [{ name: 'description', content: '404' }],
  },
  props: {
    resource: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <h1 :class="$style.title">
    404
    <span v-if="resource">
      {{ resource }}
    </span>
    Not Found
  </h1>
</template>

<style lang="scss" module>
.title {
  text-align: center;
}
</style>
