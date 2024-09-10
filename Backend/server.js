require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const fetch = require('node-fetch'); // To make HTTP requests (install with npm if not installed)

const app = express();
const PORT = process.env.PORT || 5000;

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Welcome to the Acqonews API!');
});

// News API route
app.get('/news', async (req, res) => {
  const apiKey = process.env.API_KEY; // Fetch the API key from the .env file
  const apiUrl = `https://gnews.io/api/v4/top-headlines?apikey=${apiKey}&lang=en`;

  try {
    // Fetch news data from gnews.io API
    const response = await fetch(apiUrl);
    const newsData = await response.json();

    // Return the news data to the client
    res.json(newsData);
  } catch (error) {
    // Handle errors, such as if the API request fails
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
