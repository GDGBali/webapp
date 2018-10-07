<template>
  <ResourceList title="Events" add-href="/kelian/events/new" />
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
  },
};
</script>
