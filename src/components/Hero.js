// src/components/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
  <AnimatedBackground />
  <div className={styles.heroContent}>
    <h1 className={styles.title}>Heitor Novaes</h1>
    <h2 className={styles.subtitle}>
      Desenvolvedor Full-Stack & Arquiteto de Soluções Digitais
    </h2>
  </div>
  <div className={styles.scrollDown}></div>
</div>
  );
};

export default Hero;