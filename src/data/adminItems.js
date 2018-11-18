const createAdminItem = (
  href,
  title,
  icon,
  access = {
    action: 'manage',
    resource: 'all',
  }
) => {
  return {
    href,
    title,
    icon,
    access,
  };
};

export default [
  createAdminItem('/', 'Home', 'home'),
  createAdminItem('/events', 'Events', 'event'),
  createAdminItem('/venues', 'Venues', 'place'),
  createAdminItem('/users', 'Users', 'people'),
  createAdminItem('/attendees', 'Attendees', 'people', {
    action: 'read',
    resource: 'admin',
  }),
];
