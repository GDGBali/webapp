<template>
  <ResourceList title="Venues" add-href="/kelian/venues/new" />
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
  },
};
</script>
