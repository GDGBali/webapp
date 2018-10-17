import { getAuthUrl } from '@api/config';
import axios from 'axios';

const googleLogin = async authCode => {
  const data = {
    code: authCode,
  };
  const searchParams = Object.keys(data)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    })
    .join('&');

  return axios({
    method: 'post',
    url: `${getAuthUrl()}/auth/google_oauth2/callback`,
    data: searchParams,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
  });
};
export default { googleLogin };
