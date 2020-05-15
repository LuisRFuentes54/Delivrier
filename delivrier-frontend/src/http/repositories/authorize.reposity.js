import httpClient from '../http-client';
const resource = '/authorize';

export default {
  authorize(user) {
    return httpClient.post(`${resource}`, user);
  }
};
