import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [abierto, establecerAbierto] = useState(false)

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ]

  const manejarClicNav = (e, targetId) => {
    e.preventDefault()
    establecerAbierto(false)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">Portfolio</a>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => manejarClicNav(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar-toggle ${abierto ? 'active' : ''}`}
          onClick={() => establecerAbierto(!abierto)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {abierto && (
        <div className="navbar-menu-mobile">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => manejarClicNav(e, item.id)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
