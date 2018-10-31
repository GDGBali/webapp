import { Ability, AbilityBuilder } from '@casl/ability';
import { SET_CURRENT_USER } from '@state/mutationTypes';

const ROLES = ['superAdmin', 'admin', 'volunteer', 'speaker', 'member'];

export const getRoles = rolesMask => {
  return ROLES.filter(
    role => ((rolesMask || 0) & (2 ** ROLES.indexOf(role))) !== 0
  );
};

// const hasRole = (rolesMask, role) => getRoles(rolesMask).includes(role);

export const defineAbilitiesFor = rolesMask => {
  const currentRoles = getRoles(rolesMask);

  const hasAccess = roles => currentRoles.some(role => roles.includes(role));

  return AbilityBuilder.define((allow, forbid) => {
    if (hasAccess(['superAdmin'])) {
      allow('manage', 'all');
    }

    if (hasAccess(['admin', 'volunteer'])) {
      allow('read', 'admin');
    }

    if (hasAccess(['volunteer'])) {
      allow('read', 'events');
    }
  });
};

export const ability = new Ability();
export const abilityPlugin = store => {
  return store.subscribe(({ type, payload }) => {
    if (type === SET_CURRENT_USER) {
      if (payload.user) {
        ability.update(store.state.auth.ability.rules);
      }
    }
  });
};
