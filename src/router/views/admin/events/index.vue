<template>
  <ResourceList 
    title="Events" 
    add-href="/kelian/events/new" 
    :list="eventsList" 
    card-view
  />
</template>

<script>
import { setPageTitle } from '@utils/adminPage';
import ResourceList from '@components/Admin/ResourceList';

export default {
  components: {
    ResourceList,
  },
  created() {
    setPageTitle(this, 'Events');
    this.$store.dispatch('admin/FETCH_EVENTS');
  },
  computed: {
    eventsList() {
      return this.$store.state.admin.events.list;
    },
  },
};
</script>
