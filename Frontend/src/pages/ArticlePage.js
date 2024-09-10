// src/pages/ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // If using React Router for routing

const ArticlePage = () => {
  const { id } = useParams(); // Get article ID from URL parameters
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`/api/news/${id}`); // Replace with your API endpoint
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Failed to fetch article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default ArticlePage;
