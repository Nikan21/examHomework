import axios from 'axios';
import CONSTANTS from '../constants';
import history from '../browserHistory';
import { resfreshToken } from './rest/restController';

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = window.localStorage.getItem(CONSTANTS.ACCESS_TOKEN);

    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  },
  (err) => Promise.reject(err)
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.tokenPair) {
      saveTokenPair(response.data.tokenPair);
    }

    return response;
  },
  async (err) => {
    // access token expired
    if (
      err.response.status === 403 &&
      history.location.pathname !== '/login' &&
      history.location.pathname !== '/registration' &&
      history.location.pathname !== '/'
    ) {
      // send refresh tokens request
      const refreshToken = localStorage.getItem(CONSTANTS.REFRESH_TOKEN);
      if (!refreshToken) {
        logoutUser();
        return Promise.reject(err);
      }

      try {
        const response = await resfreshToken({ refreshToken });
        saveTokenPair(response.data.tokenPair);

        // do initial request
        instance.request(err.config);
        return
      } catch (error) {
        // refresh token expired
        if (
          err.response.status === 419 &&
          history.location.pathname !== '/login' &&
          history.location.pathname !== '/registration' &&
          history.location.pathname !== '/'
        ) {
          /* TODO check saga remove user data */

          logoutUser();
        }
      }
    }

    return Promise.reject(err);
  }
);

const saveTokenPair = ({ accessToken, refreshToken }) => {
  window.localStorage.setItem(CONSTANTS.ACCESS_TOKEN, accessToken);
  window.localStorage.setItem(CONSTANTS.REFRESH_TOKEN, refreshToken);
};

const logoutUser = () => {
  window.localStorage.removeItem(CONSTANTS.ACCESS_TOKEN);
  window.localStorage.removeItem(CONSTANTS.REFRESH_TOKEN);
  history.replace('/login');
};

export default instance;
