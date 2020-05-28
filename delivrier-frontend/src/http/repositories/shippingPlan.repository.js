import httpClient from '../http-client';
import jwt from '../../common/jwt.service';
const resource = '/shipping-type';

export default {
  async getAll() {
    let response = {
      shippingPlans:[],
      error: false
    }
    try{
      response.shippingPlans = await httpClient.get(`${resource}/getAll`,jwt.getAuthHeaderToken());
      return response;
    }
    catch (e) {
      response.error = true;
    }
    return response;
  },
};
