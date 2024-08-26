import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories`);
    return response.data;
  } catch (error) {
    console.log('error fetching categories', error);
    throw error;
  }
};

export const fetchListItems = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/items`);
    return response.data;
  } catch (error) {
    console.log('error fetching data', error);
    throw error;
  }
};
