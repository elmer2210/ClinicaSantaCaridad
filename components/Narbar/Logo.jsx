// components/Logo.js
import '@/assets/css/navbar.style.css'
import Link from 'next/link';

function Logo() {
  return <div className="logo"><Link href="/" > <img src="/images/logo_clinicaSantaCaridad.png" alt="Logo de la clínica" /> </Link></div>;
}

export default Logo;
