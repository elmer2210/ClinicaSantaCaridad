// components/NavMenu.js

import Link from 'next/link';
import '@/assets/css/navbar.style.css'

const NavMenu = () => {
  return (
    <ul className="nav-menu">
      <li><Link href="/">Inicio</Link></li>
      <li><Link href="">Quienes somos</Link></li>
      <li><Link href="/especialities">Especialidades</Link></li>
      <li><Link href="">Servicios</Link></li>
      <li><Link href="">Contactanos</Link></li>
      {/* Agrega más elementos de menú según tus necesidades */}
    </ul>
  );
}

export default NavMenu;
