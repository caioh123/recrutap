import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('tokenjwt');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('tokenjwt');
      window.location.href = '/';  
    }
    return Promise.reject(error);
  }
);

export default api;