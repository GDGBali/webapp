<template>
  <v-container>
    <v-layout wrap>
      <v-flex xs12>
        <template v-if="isHomeRoute">
          <v-layout wrap justify-center class="mt-5">
            <div v-for="item in items" :key="item.title">
              <template v-if="$can(item.access.action, item.access.resource)">
                <v-btn 
                  :to="`/kelian${item.href}`" 
                  class="primary--text" 
                  light 
                  round
                  large
                >
                  <v-icon left>
                    {{ item.icon }}
                  </v-icon>
                  {{ item.title }}
                </v-btn>
              </template>
            </div>
          </v-layout>
        </template>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { setPageTitle } from '@utils/adminPage';
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
  created() {
    setPageTitle(this, 'Home');
  },
  computed: {
    isHomeRoute() {
      const homeRoutes = ['/kelian/', '/kelian'];
      return homeRoutes.includes(this.$router.currentRoute.fullPath);
    },
  },
};
</script>
