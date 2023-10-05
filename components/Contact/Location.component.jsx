import React from 'react';
import '@/assets/css/location.style.css'

const LocationComponent = () => {
  return (
    <section className="location-section">
      <div className="map-container">
        <iframe 
          title='La Caridad'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498.7272825211085!2d-78.44764981244619!3d-0.009950995395214842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5895fa3d910f7%3A0x5e5653647db99e32!2sCentro%20Medico%20LA%20CARIDAD!5e0!3m2!1ses-419!2sec!4v1696333670191!5m2!1ses-419!2sec" 
          loading="lazy">
        </iframe>
      </div>
      <div className="address">
        <h2>Dirección</h2>
        <p>123 Calle Principal, Ciudad, País, Código Postal</p>
      </div>
    </section>
  );
};

export default LocationComponent;