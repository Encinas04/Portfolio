import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2>Sobre mí</h2>

        <div className="about-content">
          <div className="about-text">
            <p>Soy estudiante de Grado Superior en Desarrollo de Aplicaciones Web. Estoy aprendiendo desarrollo web con React en frontend y Java/Spring en backend.</p>

            <p>Me interesa crear aplicaciones web funcionales y escribir código limpio mientras continúo formándome en esta profesión.</p>

            <a href="#contact" className="btn btn-primary">Contáctame</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
