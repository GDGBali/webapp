import { getApiUrl } from '@api/config';
import axios from 'axios';

export default axios.create({
  baseURL: getApiUrl(),
});
