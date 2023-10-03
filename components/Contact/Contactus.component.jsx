import React from 'react';
import '@/assets/css/contactus.style.css'

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Contacta con Nosotros</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Correo Electrónico" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Mensaje" rows="4" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <div className="contact-info">
        <h2>¿Necesitas Ayuda Rápida?</h2>
        <p>¡Contáctanos en WhatsApp y te ayudaremos al instante!</p>
        <button className="whatsapp-button">Contactar por WhatsApp</button>
      </div>
    </section>
  );
};

export default ContactSection;
