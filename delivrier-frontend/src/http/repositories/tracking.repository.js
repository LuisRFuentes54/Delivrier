import httpClient from '../http-client';
const resource = '/tracking';

export default {
  get(trackingNumber) {
    return httpClient.get(`${resource}/${trackingNumber}`);
  },
  sendPDF(payload) {
    return httpClient.post(`${resource}/pdf/${payload.trackingNumber}`, payload.pdf);
  }
};
