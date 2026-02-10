import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <h1>Héctor Encinas</h1>
        <h2>Desarrollador Web</h2>
        <p>Estudiante de Grado Superior en Desarrollo de Aplicaciones Web</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Proyectos</a>
          <a href="#contact" className="btn btn-secondary">Contáctame</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
