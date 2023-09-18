// components/Navbar.js
import Logo from './Logo';
import NavMenu from './NarMenu';
import '@/assets/css/navbar.style.css'


function NavbarComponent() {
  return (
    <div className="navbar">
      <Logo />
      <NavMenu />
    </div>
  );
}

export default NavbarComponent;
