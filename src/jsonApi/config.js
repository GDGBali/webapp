export const getApiUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://gdg-bali.herokuapp.com';
    default:
      return 'http://localhost:3007';
  }
};
