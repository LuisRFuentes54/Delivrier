import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/office';

export default {
  async getAll() {
    let response = {
      offices:[],
      error: false
    }
    try{
      response.offices = await httpClient.get(`${resource}/getAll`,jwt.getAuthHeaderToken());
      return response;
    }
    catch (e) {
      response.error = true;
    }
    return response;
  },
};
