import httpClient from '../http-client';
const resource = '/tracking';

export default {
  get(trackingNumber) {
    return httpClient.get(`${resource}/${trackingNumber}`);
  },
  sendPDF(pdf) {
    return httpClient.post(`${resource}/pdf`, pdf);
  }
};
