<template>
  <ResourceList title="Venues" add-href="/kelian/venues/new" :list="venuesList" />
</template>

<script>
import { setPageTitle } from '@utils/adminPage';
import ResourceList from '@components/Admin/ResourceList';

export default {
  components: {
    ResourceList,
  },
  created() {
    setPageTitle(this, 'Venues');
    this.$store.dispatch('admin/FETCH_VENUES');
  },
  computed: {
    venuesList() {
      return this.$store.state.admin.venues.list;
    },
  },
};
</script>
