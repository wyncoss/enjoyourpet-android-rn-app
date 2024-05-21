import {API_URL} from '@env';
import axios from 'axios';

export const enjoyourpetAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: interceptors
