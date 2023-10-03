import '@/assets/css/footer.style.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

function FooterComponent() {
    return (
        <footer>
            <div className="containerFooter">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo_clinicaSantaCaridad.png" alt="Logo de la empresa" />
                    </div>
                    <div className="footer-contact">
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
                <hr />
                <div className='footer-socialmedia'>
                    <p>&copy; 2023 Clínica La Caridad. Todos los derechos reservados.</p>
                    <div className='footer-links'>
                        <ul>
                            <li><a href="#"> <BsFacebook /></a></li>
                            <li><a href="#"> <BsInstagram /></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default FooterComponent;
