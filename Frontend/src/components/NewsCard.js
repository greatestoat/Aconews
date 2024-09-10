// src/components/NewsCard.js
import React from 'react';
import './NewsCard.css';


const NewsCard = ({ article }) => {
  return (
    <div className="news-card" style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '10px', padding: '10px', background: '#fff' }}>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsCard;
