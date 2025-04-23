import axios from 'axios';

const api = axios.create({
  baseURL: 'http://54.207.9.215:3000',
});

export default api;