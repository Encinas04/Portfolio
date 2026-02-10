import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [datosFormulario, establecerDatosFormulario] = useState({
    name: '',
    email: '',
    message: ''
  })

  const manejarCambio = (e) => {
    const { name, value } = e.target
    establecerDatosFormulario(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const manejarEnvio = (e) => {
    e.preventDefault()
    console.log('Datos enviados:', datosFormulario)
    establecerDatosFormulario({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2>Contacto</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Tienes preguntas?</h3>
            <p>Puedes contactarme por estos medios:</p>

            <div className="contact-methods">
              <a href="mailto:hencinas23@gmail.com" className="contact-method">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>hencinas23@gmail.com</p>
                </div>
              </a>

              <a href="tel:+34600000000" className="contact-method">
                <span className="icon">📱</span>
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 600 00 00 00</p>
                </div>
              </a>

              <a href="#" className="contact-method">
                <span className="icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>España</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={manejarEnvio}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={datosFormulario.name}
                onChange={manejarCambio}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={datosFormulario.email}
                onChange={manejarCambio}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={datosFormulario.message}
                onChange={manejarCambio}
                required
                placeholder="Tu mensaje aquí..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
