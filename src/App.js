// Modules externes
import React, { useState } from 'react';

// Composants internes
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';

function App() {
  const [language, setLanguage] = useState('en');


  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="Switch_Button" onClick={toggleLanguage}>
          {language === 'en' ? 'Switch to French' : "Passer à l'anglais"}
        </button>
      </div>

      <Header language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
