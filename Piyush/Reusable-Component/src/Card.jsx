import React from 'react';
import './Card.css';

const Card = ({ title, description, isHighlighted = false }) => {
  return (
    <div className={`feature-card ${isHighlighted ? 'highlighted' : ''}`}>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default Card;