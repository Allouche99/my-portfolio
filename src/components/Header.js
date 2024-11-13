import React from 'react';

function Header({ language }) {
  return (
    <header>
      <h1>{language === 'en' ? 'My Portfolio' : 'Mon Portfolio'}</h1>
      <nav>
        <a href="#about">{language === 'en' ? 'About' : 'À propos'}</a>
        <a href="#projects">{language === 'en' ? 'Projects' : 'Projets'}</a>
        <a href="#contact">{language === 'en' ? 'Contact' : 'Contactez-moi'}</a>
      </nav>
    </header>
  );
}
export default Header;