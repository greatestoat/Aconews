// src/services/api.js
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
const BASE_URL = 'https://gnews.io/api/v4'; // Replace with the base URL of the gnews.io API

export const fetchNews = async (query = '', page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?apikey=${API_KEY}&q=${query}&page=${page}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return { articles: [] };
  }
};
