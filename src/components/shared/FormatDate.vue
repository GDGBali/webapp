<template>
  <div>
    {{ formattedDate }}
  </div>
</template>

<script>
import formatDate from '@utils/filter';

export default {
  props: {
    startsAt: {
      type: String,
      default: '',
    },
    withTime: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedDate() {
      return formatDate(this.startsAt, this.withTime);
    },
  },
};
</script>
