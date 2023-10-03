// components/Navbar.js
import Logo from './Logo';
import NavMenu from './NarMenu';
import styles from '@/assets/css/Navbar.module.css'
import React, { useEffect, useState } from 'react';

function NavbarComponent() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`${styles.navbar} ${scrolling ? styles.fixed : ''}`}>
      <Logo />
      <NavMenu /> 
    </div>
  );
}

export default NavbarComponent;
