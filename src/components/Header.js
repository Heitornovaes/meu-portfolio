// src/components/Header.js
import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.socialIcons}>
        <a 
          href="https://github.com/Heitornovaes" // <-- MUDE AQUI
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/heitor-novaes-dos-santos-204779292/" // <-- MUDE AQUI
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="/CV-Heitor-Novaes.pdf" // <-- MUDE SE O NOME DO ARQUIVO FOR DIFERENTE
          download
          aria-label="Baixar Currículo"
        >
          <FaFileDownload />
        </a>
      </nav>
    </header>
  );
};

export default Header;