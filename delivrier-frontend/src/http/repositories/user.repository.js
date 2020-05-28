import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/user';

export default {
  get(id) {
    return httpClient.get(`${resource}/${id}`);
  },
  getAll() {
    return httpClient.get(`${resource}`);
  },
  async getUserContacts(userId) {
    let response = {
      contacts:[],
      error: false
    }
    try{
      response.contacts = await httpClient.get(`${resource}/contacts/${userId}`,jwt.getAuthHeaderToken());
      return response;
    }
    catch (e) {
      response.error = true;
    }
    return response;
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
