import axios from 'axios';

const apiUrl = () => `${apiRootUrl()}/api/v1`;

export const apiRootUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://gdg-bali.herokuapp.com';
    default:
      return 'http://localhost:3007';
  }
};

export default axios.create({
  baseURL: apiUrl(),
});
