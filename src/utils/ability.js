// import { AbilityBuilder } from '@casl/ability';

// function defineAbilitiesFor(user) {
//   return AbilityBuilder.define((allow, forbid) => {
//     if (user.isAdmin()) {
//       allow('manage', 'all');
//     } else {
//       allow('read', 'all');
//     }
//   });
// }

const ROLES = ['superAdmin', 'admin', 'volunteer', 'speaker', 'member'];

export const getRoles = rolesMask => {
  return ROLES.filter(
    role => ((rolesMask || 0) & (2 ** ROLES.indexOf(role))) !== 0
  );
};

export const hasRole = (rolesMask, role) => getRoles(rolesMask).includes(role);
