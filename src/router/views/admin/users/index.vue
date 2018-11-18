<template>
  <ResourceList title="Users" add-href="/kelian/users/new" :list="users" />
</template>

<script>
import { setPageTitle } from '@utils/adminPage';
import ResourceList from '@components/Admin/ResourceList';

export default {
  components: {
    ResourceList,
  },
  created() {
    setPageTitle(this, 'Users');
    this.$store.dispatch('admin/FETCH_USERS');
  },
  computed: {
    users() {
      return this.$store.state.admin.users.list;
    },
  },
};
</script>
