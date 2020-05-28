import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/insurance';

export default {
  async getAll() {
    let response = {
      insurances:[],
      error: false
    }
    try{
      response.insurances = await httpClient.get(`${resource}/getAll`,jwt.getAuthHeaderToken());
      return response;
    }
    catch (e) {
      response.error = true;
    }
    return response;
  },
};
