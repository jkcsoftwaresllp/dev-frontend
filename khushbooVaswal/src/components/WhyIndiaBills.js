import React from 'react';
import styles from './WhyIndiaBills.module.css';

const WhyIndiaBills = ({ title, description, cards }) => {
  return (
    <section className={styles.whyIndiaBills}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <h3>{card.heading}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIndiaBills;
