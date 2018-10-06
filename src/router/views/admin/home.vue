<template>
  <v-container>
    <v-layout wrap justify-center class="mt-5">
      <v-btn 
        :to="`/kelian${item.href}`" 
        class="primary--text" 
        light 
        round
        large
        v-for="item in items"
        :key="item.title"
      >
        <v-icon left>
          {{ item.icon }}
        </v-icon>
        {{ item.title }}
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import adminItems from '@src/data/adminItems';

export default {
  data: () => ({
    items: [],
  }),
  mounted() {
    const items = [...adminItems];
    items.shift();
    this.items = items;
  },
};
</script>
