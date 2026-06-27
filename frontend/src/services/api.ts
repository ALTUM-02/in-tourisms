import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://airoguide.com',
  headers: { 'Content-Type': 'application/json' },
});

// Automatically inject JWT bearer tokens
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt_access_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Catch unauthorized calls globally
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('jwt_access_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
