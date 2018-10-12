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
      return 'https://gdg-bali.herokuapp.com/auth/google_oauth2/callback';
    default:
      return 'http://localhost:3007/auth/google_oauth2/callback';
  }
};
