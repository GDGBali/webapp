<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
        },
        {
          text: 'Link 1',
          disabled: false,
        },
        {
          text: 'Link 2',
          disabled: true,
        },
      ],
    };
  },
};
</script>
