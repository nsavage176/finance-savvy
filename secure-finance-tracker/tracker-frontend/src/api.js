// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend URL
});

// If we have a token, attach it to every request
API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export const registerUser = (email, password) => API.post('/auth/register', { email, password });
export const loginUser = (password) => API.post('/auth/login', { email, password });
export const getTransactions = () => API.get('/transactions');
export const addTransaction = (amount, description) => API.post('/transactions', { amount, description });
