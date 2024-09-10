// src/components/Button.js
import React from 'react';
import './Button.css'; // Add neon button styles here

const Button = ({ children, onClick }) => {
  return (
    <button className="neon-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
