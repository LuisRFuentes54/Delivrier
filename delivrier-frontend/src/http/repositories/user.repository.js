import httpClient from "../http-client";
const resource = "/users";

export default {
  get(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  getAll() {
    return httpClient.get(`${resource}`);
  },
  create(payload) {
    return httpClient.post(`${resource}`, payload);
  },
  update(payload, id) {
    return httpClient.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return httpClient.delete(`${resource}/${id}`);
  },
};
