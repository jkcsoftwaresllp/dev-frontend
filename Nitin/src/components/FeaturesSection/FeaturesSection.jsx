import React from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "Real Time Stock Tracking",
      description: "Monitor real-time stock trends for smarter decisions",
      isHighlighted: true
    },
    {
      id: 2,
      title: "GST Billing",
      description: "Effortless GST billing and inventory management"
    },
    {
      id: 3,
      title: "Reports",
      description: "Generate detailed reports for orders, sales, and more"
    },
    {
      id: 4,
      title: "Dedicated Customer Support",
      description: "Reliable customer support whenever you need it"
    },
    {
      id: 5,
      title: "Unlimited Warehouse",
      description: "Manage multiple warehouses with unlimited capacity"
    },
    {
      id: 6,
      title: "Expiry Alert",
      description: "Get timely expiry alerts to avoid stock wastage"
    },
    {
      id: 7,
      title: "Discount & Offers",
      description: "Easily apply discounts and manage special offers"
    },
    {
      id: 8,
      title: "Centralized Dashboard",
      description: "Access all your business data through a single dashboard"
    },
     {
      id: 9,
      title: "User Access Management",
      description: "Control access with customizable roles and permissions"
    },
     {
      id: 10,
      title: "Custom Business URL ",
      description: "Get a custom business URL for a personalized online presence"
    },
     {
     id: 11,
      title: "Suppliers ",
      description: "Manage and track all your suppliers in one place"
    },
     {
     id: 12,
      title: "Credit Mangement ",
      description: "Efficiently manage customer credits and payment terms"
    },
     {
     id: 13,
      title: "Security of Data ",
      description: "Ensure the highest level of data security and privacy"
    },
     {
     id: 14,
      title: "Sales Summary ",
      description: "Get a sales summary for better business insights"
    },
     {
     id: 15,
      title: "Custom Orders with App",
      description: "Create and manage custom orders easily through the app"
    },
     {
     id: 16,
      title: "Individual Performance ",
      description: "Effortlessly create and manage custom orders through the app"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="header-section">
          <h2 className="main-title">Product Features</h2>
          <p className="subtitle">
            Discover the powerful modules that make IndiaBills the perfect solution for your business needs.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard
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