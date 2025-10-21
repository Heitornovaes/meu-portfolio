// src/App.js
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AnimatedBackground from './components/AnimatedBackground.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <AnimatedBackground /> 
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;