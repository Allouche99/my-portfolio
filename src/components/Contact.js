import React from 'react';

function Contact({ language }) {
  return (
    <section id="contact">
      <h2>{language === 'en' ? 'Contact' : 'Contactez-moi'}</h2>

      <div className="contact-info">
        <p>
          {language === 'en'
            ? 'You can reach me directly at:'
            : 'Vous pouvez me contacter directement à:'}
        </p>
        <ul>
          <li>Email: YassirAllouche@gmail.com</li>
          <li>Phone: (33) 773-825431</li>
          <li>
            {language === 'en' ? 'LinkedIn: ' : 'LinkedIn: '}
            <a
              href="https://www.linkedin.com/in/yassir-allouche-05b556306/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yassir ALLOUCHE
            </a>
          </li>
        </ul>
        <a
          href="https://allouche99.github.io/my-portfolio/public/cv-alternance.pdf"
          target="_blank"
        >
          {language === 'en'
            ? 'Download My CV (PDF)'
            : 'Télécharger mon CV (PDF)'}
        </a>
      </div>
    </section>
  );
}

export default Contact;
