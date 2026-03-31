import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Token injector — set this from outside (AuthContext / hooks)
let authTokenGetter: (() => string | null) | null = null;
let onUnauthorized: (() => void) | null = null;

export function setAuthTokenGetter(getter: () => string | null) {
  authTokenGetter = getter;
}

export function setOnUnauthorized(handler: () => void) {
  onUnauthorized = handler;
}

// Request interceptor — attach Bearer token
axiosInstance.interceptors.request.use((config) => {
  const token = authTokenGetter ? authTokenGetter() : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor — handle 401 globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && onUnauthorized) {
      onUnauthorized();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
