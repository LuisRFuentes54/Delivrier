import httpClient from '../http-client';
const resource = '/language';

export default {
  getOptions() {
    return httpClient.get(`${resource}`);
  },  
  getTerms(cod) {
    return httpClient.get(`${resource}/terms/${cod}`);
  },
};