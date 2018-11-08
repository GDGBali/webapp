import { getAuthUrl } from '@api/config';
import axios from 'axios';

const googleLogin = async authCode => {
  const searchParams = Object.keys(authCode)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(authCode[key]);
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
