import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/shipping';

export default {
  async getDelay() {
    let response = {
      simulationConfig:{}
    }
      response.simulationConfig = await httpClient.get(`${resource}/getDelay`,jwt.getAuthHeaderToken());
   
    return response;
  },
  async createShipping(shipping) {
      await httpClient.post(`${resource}/create`,shipping,jwt.getAuthHeaderToken());
  },
};
