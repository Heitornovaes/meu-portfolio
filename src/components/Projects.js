// src/components/Projects.js
import React from 'react';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.sectionTitle}>Projetos Recentes</h2>

      <div className={styles.projectsGrid}>

        {/* --- Card de Projeto 1 (App de Empréstimos) --- */}
        {/* No futuro, você pode colocar um screenshot do seu app aqui */}
        <div className={styles.projectCard}>
          <div className={styles.projectImagePlaceholder}></div>
          <h3 className={styles.projectTitle}>App de Gestão de Empréstimos</h3>
          <p className={styles.projectDescription}>
            Uma aplicação web completa para gerenciar empréstimos, clientes e pagamentos,
            construída com foco em performance e usabilidade.
          </p>
          <ul className={styles.projectTags}>
            <li className={styles.tag}>React</li>
            <li className={styles.tag}>Supabase</li>
            <li className={styles.tag}>Node.js</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Código
            </a>
            <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </div>

        {/* --- Card de Projeto 2 (Este Portfólio) --- */}
        {/* Você pode tirar um screenshot desta página quando estiver pronta */}
        <div className={styles.projectCard}>
          <div className={styles.projectImagePlaceholder}></div>
          <h3 className={styles.projectTitle}>Portfólio Pessoal</h3>
          <p className={styles.projectDescription}>
            O site que você está vendo. Desenvolvido com React, design responsivo
            e animações interativas para ser meu cartão de visitas digital.
          </p>
          <ul className={styles.projectTags}>
            <li className={styles.tag}>React</li>
            <li className={styles.tag}>CSS Modules</li>
            <li className={styles.tag}>React Icons</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.link} target="_blank" rel="noopener noreferrer">
              <FaGithub /> Código
            </a>
          </div>
        </div>

        {/* Adicione um 3º card aqui quando tiver outro projeto */}

      </div>
    </section>
  );
  
};
export default Projects;