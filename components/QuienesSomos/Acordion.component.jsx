// components/Accordion.js

import React, { useState } from 'react';
import '@/assets/css/acordion.style.css'

const AccordionComponent = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
         <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionComponent;
