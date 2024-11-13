import React from 'react';

function Projects({ language }) {
  const projects = [
    {
      name: language === 'en' ? 'Trackalorie-webpack' : 'Trackalorie-webpack (Fr)',
      description: language === 'en' 
        ? 'App for tracking calories, meals, and workouts.' 
        : 'Application pour suivre les calories, les repas et les entraînements.',
      link: 'https://github.com/Allouche99/trackalorie-webpack',
    },
    {
      name: language === 'en' ? 'Project Two' : 'Projet Deux',
      description: language === 'en' 
        ? 'Projects that I do to practice what I learn.' 
        : 'Projets que je fais pour pratiquer ce que j\'apprends.',
      link: 'https://github.com/Allouche99/projets',
    },
  ];

  return (
    <section id="projects">
      <h2>{language === 'en' ? 'My Projects' : 'Mes Projets'}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {language === 'en' ? 'View Project' : 'Voir le projet'}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
