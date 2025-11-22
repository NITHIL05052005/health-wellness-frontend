// src/services/api.js
import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({ baseURL: API_BASE });

export function setToken(token) {
  if(token) api.defaults.headers.common['x-auth-token'] = token;
  else delete api.defaults.headers.common['x-auth-token'];
}

export default api;
