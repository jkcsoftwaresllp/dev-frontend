import React from 'react';
import WhyIndiaBills from './components/WhyIndiaBills';

function App() {
  const cardData = [
    { heading: 'Made for Indian Businesses', text: 'Designed specifically with Indian tax laws, business practices, and requirements in mind.' },
    { heading: 'Bank-Grade Security', text: 'Your data is protected with enterprise-level encryption and regular security audits..' },
    { heading: 'Lightning Fast', text: 'Optimized for speed, even with large datasets and multiple users.' },
    { heading: '24/7 Support', text: 'Our dedicated support team is always available to help you with any issues.' },
  ];

  return (
    <div>
      <WhyIndiaBills
        title="Why IndiaBills?"
        description="We're more than just a billing software. Here's what sets us apart.."
        cards={cardData}
      />
    </div>
  );
}

export default App;
