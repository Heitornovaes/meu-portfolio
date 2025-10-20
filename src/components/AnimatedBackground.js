// src/components/AnimatedBackground.js

import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    background: {
      color: {
        value: "#0a0a1a",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className={styles.particlesContainer}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
    </div>
  );
};

export default AnimatedBackground;