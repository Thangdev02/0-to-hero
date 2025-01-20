import axios from 'axios';

// Base URL of your API
const BASE_URL = 'http://localhost:5086/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/Products`);
    return response.data; // Return the list of products
  } catch (error) {
    console.error('Error fetching products:', error.message);
    throw new Error(
      error.response?.data?.message || 'Failed to fetch products. Please try again.'
    );
  }
};
