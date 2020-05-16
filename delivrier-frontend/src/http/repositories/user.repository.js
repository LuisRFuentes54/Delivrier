import httpClient from '../http-client';
const resource = '/user';

export default {
  get(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  getAll() {
    return httpClient.get(`${resource}`);
  },
  create(payload) {
    return httpClient.post(`${resource}/signup`, payload);
  },
  update(payload, id) {
    return httpClient.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return httpClient.delete(`${resource}/${id}`);
  }
};
