// src/components/About.js
import React from 'react';
import styles from './About.module.css';

// 1. Importe os ícones que vamos usar
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiAdobecreativecloud } from 'react-icons/si';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>Sobre mim</h2>

      <div className={styles.aboutContentContainer}>
        <div className={styles.textColumn}>
          {/* ...seu texto continua aqui... */}
        </div>



        <div className={styles.skillsGrid}>
          {/* 2. Substitua os divs vazios por estes cards preenchidos */}
          <div className={styles.skillCard}>
            <SiAdobecreativecloud className={styles.skillIcon} /> {/* <-- ÍCONE TROCADO */}
            <p className={styles.skillName}>Adobe CC</p>           {/* <-- TEXTO TROCADO */}
          </div>
          <div className={styles.skillCard}>
            <FaHtml5 className={styles.skillIcon} />
            <p className={styles.skillName}>HTML5</p>
          </div>
          <div className={styles.skillCard}>
            <FaCss3Alt className={styles.skillIcon} />
            <p className={styles.skillName}>CSS3</p>
          </div>
          <div className={styles.skillCard}>
            <IoLogoJavascript className={styles.skillIcon} />
            <p className={styles.skillName}>JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;