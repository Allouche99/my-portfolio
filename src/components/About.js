import React from 'react';

function About({ language }) {
  return (
    <section id="about">
      <h2>{language === 'en' ? 'About Me' : 'À propos de moi'}</h2>
      <div className="about-container">
        <div className="about-image">
          <img
            src={`${process.env.PUBLIC_URL}/mypic.jpg`}
            alt="Yassir ALLOUCHE"
          />
        </div>
        <p>
          {language === 'en'
            ? 'Passionate about web development and eager to deepen my skills, I am seeking an apprenticeship opportunity in this field. My goal is to join an educational program focused on web development where I can acquire new technical skills, enhance my understanding of advanced concepts, and actively contribute to real-world projects. I am confident that the company will benefit from my skills, and my commitment to learning and growing in this field motivates me to pursue this path and fully invest in this apprenticeship opportunity.'
            : "Passionné par le développement web et désireux d'approfondir mes compétences, je suis à la recherche d'une opportunité de contrat en alternance dans ce domaine. Mon objectif est de rejoindre un programme éducatif axé sur le développement web où je pourrai acquérir de nouvelles compétences techniques, développer ma compréhension des concepts avancés et contribuer activement à des projets concrets. Je suis convaincu que l'entreprise bénéficiera de mes compétences, mon engagement à apprendre et à évoluer dans ce domaine me motive à poursuivre cette voie et à investir pleinement dans cette opportunité de formation en alternance."}
        </p>
      </div>
    </section>
  );
}

export default About;
