import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/parameter';

export default {
  async getAll() {
    let response = {
      parameters:null,
    }
    response.parameters = await httpClient.get(`${resource}/getAll`,jwt.getAuthHeaderToken());
    return response;
  },
};
