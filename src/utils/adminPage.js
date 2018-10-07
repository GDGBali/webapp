import { SET_ADMIN_TITLE } from '@state/mutationTypes';

export const setPageTitle = (vue, title) => {
  vue.$store.commit(`admin/${SET_ADMIN_TITLE}`, { title });
};
