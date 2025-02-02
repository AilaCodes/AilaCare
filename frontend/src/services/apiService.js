// filepath: /AilaCareApp/frontend/src/services/apiService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default api;