// services/authService.js

import axios from 'axios';

// Base URL of your API
const BASE_URL = 'http://localhost:5086/api';

// Function to log in a user
export const loginService = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/Auth/login`, {
      username,
      password,
    });

    const { token } = response.data;

    // Save token to localStorage for persistence
    localStorage.setItem('authToken', token);

    // Decode token if you need additional data (like roles)
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  } catch (error) {
    // Handle errors and throw them for the UI to handle
    throw new Error(
      error.response?.data?.message || 'Login failed. Please try again.'
    );
  }
};

// Function to log out a user
export const logoutService = () => {
  // Clear token from localStorage
  localStorage.removeItem('authToken');
};

// Function to get the saved token
export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Axios instance for authenticated requests
export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

// Add an interceptor to include the token in every request
apiInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
