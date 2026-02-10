import React from 'react'
import './Skills.css'

function Skills() {
  const habilidades = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Java', 'Spring Boot', 'MySQL', 'Git']

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2>Mis Habilidades</h2>

        <div className="skills-grid">
          {habilidades.map((habilidad) => (
            <div key={habilidad} className="skill-card">
              <div className="skill-name">{habilidad}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
