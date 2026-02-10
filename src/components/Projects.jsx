import React from 'react'
import './Projects.css'

function Projects() {
  const proyectos = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Por desarrollar',
      technologies: ['React', 'JavaScript']
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Por desarrollar',
      technologies: ['React', 'Java']
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Por desarrollar',
      technologies: ['React', 'Spring Boot']
    }
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2>Mis Proyectos</h2>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="project-card">
              <h3>{proyecto.title}</h3>
              <p>{proyecto.description}</p>
              <div className="project-tech">
                {proyecto.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
