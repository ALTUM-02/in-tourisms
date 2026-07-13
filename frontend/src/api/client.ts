import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - attach JWT token
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/token/refresh/`, {
            refresh: refreshToken,
          });
          
          const { access } = response.data;
          localStorage.setItem('access_token', access);
          
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${access}`;
          }
          return api(originalRequest);
        }
      } catch {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;

// ---- API Endpoints ----

// Auth
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/token/', { email, password }),
  register: (data: Record<string, unknown>) =>
    api.post('/auth/register/', data),
  refreshToken: (refresh: string) =>
    api.post('/auth/token/refresh/', { refresh }),
  getProfile: (token?: string) =>
    token
      ? axios.get(`${API_BASE_URL}/auth/profile/`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      : api.get('/auth/profile/'),
  updateProfile: (data: Record<string, unknown>) =>
    api.put('/auth/profile/', data),
};

// Destinations
export const destinationsAPI = {
  list: (params?: Record<string, string>) =>
    api.get('/destinations/', { params }),
  detail: (id: number) => api.get(`/destinations/${id}/`),
  featured: () => api.get('/destinations/featured/'),
  search: (query: string) => api.get('/destinations/search/', { params: { q: query } }),
  reviews: (id: number) => api.get(`/destinations/${id}/reviews/`),
};

// Wildlife
export const wildlifeAPI = {
  list: (params?: Record<string, string>) =>
    api.get('/wildlife/', { params }),
  detail: (id: number) => api.get(`/wildlife/${id}/`),
  byDestination: (destinationId: number) =>
    api.get('/wildlife/', { params: { destination: destinationId } }),
};

// Hotels
export const hotelsAPI = {
  list: (params?: Record<string, string>) =>
    api.get('/hotels/', { params }),
  detail: (id: number) => api.get(`/hotels/${id}/`),
  byDestination: (destinationId: number) =>
    api.get('/hotels/', { params: { destination: destinationId } }),
};

// Food & Drinks
export const foodAPI = {
  restaurants: (params?: Record<string, string>) =>
    api.get('/restaurants/', { params }),
  menu: (restaurantId: number) =>
    api.get(`/restaurants/${restaurantId}/menu/`),
  menuItems: (params?: Record<string, string>) =>
    api.get('/menu-items/', { params }),
};

// Bookings
export const bookingsAPI = {
  create: (data: Record<string, unknown>) =>
    api.post('/bookings/', data),
  list: () => api.get('/bookings/'),
  detail: (id: number) => api.get(`/bookings/${id}/`),
  cancel: (id: number) => api.post(`/bookings/${id}/cancel/`),
};

// Favorites
export const favoritesAPI = {
  list: () => api.get('/favorites/'),
  add: (destinationId: number) =>
    api.post('/favorites/', { destination: destinationId }),
  remove: (id: number) => api.delete(`/favorites/${id}/`),
};

// Chat
export const chatAPI = {
  conversations: () => api.get('/chat/conversations/'),
  messages: (conversationId: number) =>
    api.get(`/chat/conversations/${conversationId}/messages/`),
  send: (conversationId: number, content: string) =>
    api.post(`/chat/conversations/${conversationId}/messages/`, { content }),
  startConversation: (userId: number) =>
    api.post('/chat/conversations/', { participant_id: userId }),
  aiChat: (message: string) =>
    api.post('/chat/ai/', { message }),
};

// Packages
export const packagesAPI = {
  list: (params?: Record<string, string>) =>
    api.get('/packages/', { params }),
  detail: (id: number) => api.get(`/packages/${id}/`),
  book: (id: number, data: Record<string, unknown>) =>
    api.post(`/packages/${id}/book/`, data),
};
