import '@/assets/css/footer.style.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

function FooterComponent() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                <div className="footer-logo">
                    <img src="/logo_clinicaSantaCaridad.png" alt="Logo de la empresa" />
                </div>
                <div className="footer-links">
                    <ul>
                    <li><a href="#"> <BsFacebook /> Facebook</a></li>
                    <li><a href="#"> <BsInstagram /> Instagram</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <p>Teléfono: (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;
