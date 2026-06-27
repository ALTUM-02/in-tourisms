import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: 'https://tourism-dashboard.com', // Replace with your actual API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add JWT token
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error
