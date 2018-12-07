import axios from 'axios';
import store from '../store/';
const REFRESH_TOKEN_URL = '/uac/auth/user/refreshToken';
export function refreshToken () {
  const instance = axios.create();
  return instance({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    url: REFRESH_TOKEN_URL,
    auth: {
      username: 'paascloud-client-uac',
      password: 'paascloudClientSecret'
    },
    data: {
      refreshToken: store.getters.getRefreshToken,
      accessToken: store.getters.getAccessToken
    }
  });
}
