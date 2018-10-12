const createItem = (text, path, icon) => ({
  text,
  path,
  icon,
});

export const navItems = [
  createItem('Home', '/', 'home'),
  createItem('Events', '/events', 'event'),
  createItem('Teams', '/teams', 'people'),
  createItem('Tutorials', '/tutorials', 'code'),
  createItem('Showcase', '/showcase', 'local_activity'),
];
