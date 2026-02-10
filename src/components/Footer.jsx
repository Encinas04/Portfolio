import React from 'react'
import './Footer.css'

function Footer() {
  const añoActual = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Héctor Encinas</h3>
            <p>Desarrollador web en formación.</p>
          </div>

          <div className="footer-links">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Sígueme</h4>
            <div className="social-icons">
              <a href="https://github.com/Encinas04" title="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {añoActual} Héctor Encinas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
