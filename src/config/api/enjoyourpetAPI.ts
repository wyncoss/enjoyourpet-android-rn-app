import {API_uRL} from '@env';
import axios from 'axios';

export const enjoyourpetAPI = axios.create({
  baseURL: API_uRL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// TODO: interceptors
