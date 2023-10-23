"use client";
import React, {useState} from 'react';
import '@/assets/css/contactus.style.css'
import FieldsComponent from '../FormField/Fields.component';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    names: '',
    lastnames:'',
    email:'',
    phone:'',
    subject:'',
    mensaje:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className='contactus'>
      <h2>Contactanos</h2>
      <div className="contact-section">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <FieldsComponent 
                title="Nombres"
                type="text"
                placeholder="Nombres"
                required
                value={formData.names} 
                onChange={handleInputChange}
              />
              <FieldsComponent 
                title="Apellidos"
                type="text"
                placeholder="Apellidos"
                required
                value={formData.lastnames} 
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <FieldsComponent 
                title="Correo electrónico"
                type="email"
                placeholder="Dirección electrónica"
                required
                value={formData.email} 
                onChange={handleInputChange}
              />
              <FieldsComponent 
                title="Teléfono"
                type="text"
                placeholder="Número telefónico"
                required
                value={formData.phone} 
                onChange={handleInputChange}
              />
            </div>
            <FieldsComponent 
              title="Asunto"
              type="text"
              placeholder="Asunto"
              required
              value={formData.subject} 
              onChange={handleInputChange}
            />
            <div className="form-group">
              <div>
              <textarea placeholder="Escribir el mensaje ..." rows="10" value={formData.mensaje} required ></textarea>
              </div>
            </div>
            <div className="form-group">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h2>¿Necesitas Ayuda Rápida y Personalizada?</h2>
          <p>¡Contáctanos en WhatsApp y te ayudaremos al instante!</p>
          <button className="whatsapp-button">Contactar por WhatsApp</button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
