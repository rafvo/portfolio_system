import axios from 'axios';
import { ConfigEnvironments } from '@/env/config_environments';

const client = axios.create({
  baseURL: ConfigEnvironments.getUrl(),
  timeout: 30000
});

client.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

client.interceptors.response.use((response) => {
  return response;
}, (error) => {
  
  return Promise.reject(error);
});

export default client; 