// src/App.js
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
// A importação do AnimatedBackground não é mais necessária aqui
import About from './components/About.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;