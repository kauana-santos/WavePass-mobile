
import axios from 'axios';
import { obterToken } from './tokenStorage';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await obterToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
