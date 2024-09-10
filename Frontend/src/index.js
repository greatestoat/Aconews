import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';  // Ensure this path is correct

// Get the root element from index.html
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component using the new API
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);
