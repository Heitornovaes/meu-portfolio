// src/components/Hero.js
import React from 'react';
import styles from './Hero.module.css';
import devSetup3D from '../assets/HTML.png';
//import devSetup3D from '../assets/vetor3D.svg';

const Hero = () => {
  return (
    <div className={styles.heroContainer} id="home" >
      <div className={styles.heroGrid}>
        
        
        <div className={styles.textColumn}>
          <h1 className={styles.title}>
           Desenvolvedor Web & Designer Criativo
          </h1>
          <h2 className={styles.subtitle}>
            Resolvendo problemas de design, construindo interfaces de usuário
            inteligentes e desenvolvendo ricas aplicações web.
          </h2>
        </div>

        
        <div className={styles.splineColumn}>
          <img 
            src={devSetup3D} 
            alt="Setup de desenvolvimento com elementos 3D flutuantes" 
            className={styles.heroImage3D} 
          />
        </div>

      </div>
      <div className={styles.scrollDown}></div>
    </div>
  );
};

export default Hero;