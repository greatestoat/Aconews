// src/components/Header.js
import React from 'react';
import Button from './Button'; // Import Button component
import './Header.css';


const Header = () => {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Acqonews</h1>
      <Button onClick={() => alert('Button clicked!')}>Get News</Button>
    </header>
  );
};

export default Header;
