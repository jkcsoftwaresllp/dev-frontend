import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Made for Indian Businesses",
    description:
      "Designed specifically with Indian tax laws, business practices, and requirements in mind.",
  },
  {
    title: "Bank-Grade Security",
    description:
      "Your data is protected with enterprise-level encryption and regular security audits.",
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized for speed, even with large datasets and multiple users.",
  },
  {
    title: "24/7 Support",
    description:
      "Our dedicated support team is always available to help you with any issues.",
  },
];

const WhyIndiaBills = () => {
  return (
    <section className="why-section">
      <h2 className="why-title">Why IndiaBills?</h2>
      <p className="why-subtitle">
        We’re more than just a billing software. Here's what sets us apart.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyIndiaBills;
