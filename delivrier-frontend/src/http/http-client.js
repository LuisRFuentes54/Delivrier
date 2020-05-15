import axios from 'axios';

const baseDomain = 'http://localhost:3000/delivrier/api/v1';

const httpClient = axios.create({
  baseURL: baseDomain || 'http://localhost:3000',
  timeout: 5000
});

httpClient.interceptors.response.use(response => response.data);

export default httpClient;
