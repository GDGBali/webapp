<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <div v-if="isHomeRoute">
          <h1>hqweqwheqwe</h1>
        </div>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { setPageTitle } from '@utils/adminPage';

export default {
  created() {
    setPageTitle(this, 'Home');
  },
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
  computed: {
    isHomeRoute() {
      const homeRoutes = ['/kelian/', '/kelian'];
      return homeRoutes.includes(this.$router.currentRoute.fullPath);
    },
  },
};
</script>
