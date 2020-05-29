import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/packing';

export default {
  async getAll() {
    let response = {
      packings:[]
    }
    response.packings = await httpClient.get(`${resource}/getAll`,jwt.getAuthHeaderToken());
    return response;
  },
};
