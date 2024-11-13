import React from 'react';

function Footer({ language }) {
  return (
    <footer>
      <p>
        {language === 'en' 
          ? '© 2024 ALLOUCHE Yassir. All Rights Reserved.'
          : '© 2024 ALLOUCHE Yassir. Tous droits réservés.'}
      </p>
    </footer>
  );
}

export default Footer;
