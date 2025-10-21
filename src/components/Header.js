// src/components/Header.js
import React from 'react';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import styles from './Header.module.css';
import HeitorLogo from '../assets/logo.png'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}> {/* <-- NOVO CONTAINER ADICIONADO AQUI */}
        
       <div className={styles.logo}>
          <a href="#home">
            <img 
              src={HeitorLogo} 
              alt="Logo" 
              className={styles.logoImage} 
            />
          </a>
        </div>

        {/* --- NAVEGAÇÃO (LINKS + ÍCONES) --- */}
        <nav className={styles.navigation}>
          <a href="#about" className={styles.navLink}>Sobre Mim</a>
          <a href="#projects" className={styles.navLink}>Projetos</a>
          <a href="#contact" className={styles.navLink}>Contato</a>
          
          {/* Separador visual */}
          <div className={styles.separator}></div> 
          
          <div className={styles.socialIcons}>
            <a 
              href="https://github.com/seu-usuario" // <-- MUDE AQUI
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/seu-usuario" // <-- MUDE AQUI
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
          </div>
        </nav>

      </div> {/* <-- FIM DO NOVO CONTAINER */}
    </header>
  );
};

export default Header;