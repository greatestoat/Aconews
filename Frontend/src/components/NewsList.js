// src/components/NewsList.js
import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import Button from './Button'; // Import Button component
import './NewsList.css';

  

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news'); // Replace with your API endpoint
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
      <Button onClick={() => console.log('Load more clicked')}>Load More</Button>
    </div>
  );
};

export default NewsList;
