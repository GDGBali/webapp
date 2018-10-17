export const getApiUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://gdg-bali.herokuapp.com/api/v1';
    default:
      return 'http://localhost:3007/api/v1';
  }
};

export const getAuthUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://gdg-bali.herokuapp.com';
    default:
      return 'http://localhost:3007';
  }
};
