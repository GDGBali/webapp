import JsonApi from 'devour-client';
import { getApiUrl } from './config';

const jsonApi = new JsonApi({ apiUrl: `${getApiUrl()}/api/v1` });

jsonApi.define('event', {
  description: '',
  startsAt: '',
  endsAt: '',
  coverImgUrl: '',
  slugUrl: '',
  meetupUrl: '',
  name: '',
  venue: {
    jsonApi: 'hasOne',
    type: 'venue',
  },
  sessions: {
    jsonApi: 'hasMany',
    type: 'session',
  },
});

jsonApi.define('venue', {
  name: '',
  mapsUrl: '',
  websiteUrl: '',
  logoUrl: '',
});

jsonApi.define('session', {
  name: '',
  duration: '',
  startsAt: '',
  user: {
    jsonApi: 'hasOne',
    type: 'user',
  },
});

jsonApi.define('user', {
  fullName: '',
});

export default jsonApi;
