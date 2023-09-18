// components/NavMenu.js

import Link from 'next/link';
import '@/assets/css/navbar.style.css'

function NavMenu() {
  return (
    <ul className="nav-menu">
      <li><Link href="/">Inicio</Link></li>
      <li><Link href="/acerca">Acerca de</Link></li>
      <li><Link href="/servicios">Servicios</Link></li>
      {/* Agrega más elementos de menú según tus necesidades */}
    </ul>
  );
}

export default NavMenu;
