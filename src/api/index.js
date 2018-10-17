import { getApiUrl, getAuthUrl } from '@api/config';
import axios from 'axios';

export const rootEndpoint = () => {
  return axios.create({
    baseURL: getAuthUrl(),
  });
};

export default axios.create({
  baseURL: getApiUrl(),
});
