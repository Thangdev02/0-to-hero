import axios from 'axios';

const API_URL = 'https://67526dd0d1983b9597b62d05.mockapi.io/account';

export const loginService = async (username, password) => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data;

    // Find a user with matching username and password
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      localStorage.setItem('key', JSON.stringify(user));
      return user; // Return the user details if a match is found
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to authenticate');
  }
};
