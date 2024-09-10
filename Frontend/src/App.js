// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import './App.css'; // Import App-specific styles

  const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/article/:id" component={ArticlePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


