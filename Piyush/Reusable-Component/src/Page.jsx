import React from 'react';
import Card from './Card.jsx';
import './Page.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Piyush",
      description: "I'm a developer at JKC",
    //   isHighlighted: true
    },
    {
      id: 2,
      title: "Avinash",
      description: "I'm a intern at JKC"
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="header-section">
          <h2 className="main-title">Profile Card</h2>
          <p className="subtitle">
            {/* Discover the powerful modules that make IndiaBills the perfect solution for your business needs. */}
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <Card
              key={feature.id}
              title={feature.title}
              description={feature.description}
              isHighlighted={feature.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;