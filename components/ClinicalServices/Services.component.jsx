import React from 'react';
import CardSlider from '../CardSlider.component'; // Ajusta la ruta según tu estructura de archivos
import "@/assets/css/services.style.css";

const productsData = [
  { title: 'Producto 1', description: 'Descripción del Producto 1', price: '00.00' },
  { title: 'Producto 2', description: 'Descripción del Producto 2', price: '00.00' },
  { title: 'Producto 3', description: 'Descripción del Producto 3', price: '00.00' },
  { title: 'Producto 4', description: 'Descripción del Producto 4', price: '00.00' },
  { title: 'Producto 5', description: 'Descripción del Producto 5', price: '00.00' },
  { title: 'Producto 6', description: 'Descripción del Producto 6', price: '00.00' },
  // Agrega más datos de productos según sea necesario
];

const ServicesComponent = () => {
  return (
    <div className="services_section">
      <h3 className='title'>Nuestros servicios</h3>
      <CardSlider data={productsData} />
    </div>
  );
};

export default ServicesComponent;
