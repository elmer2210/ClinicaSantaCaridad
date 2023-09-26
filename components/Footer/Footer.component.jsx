import '@/assets/css/footer.style.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'

function FooterComponent() {
    return (
        <footer>
            <div class="container">
                <div class="footer-content">
                <div class="footer-logo">
                    <img src="/images/logo_clinicaSantaCaridad.png" alt="Logo de la empresa" />
                </div>
                <div class="footer-links">
                    <ul>
                    <li><a href="#"> <BsFacebook /> Facebook</a></li>
                    <li><a href="#"> <BsInstagram /> Instagram</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <p>Teléfono: (123) 456-7890</p>
                    <p>Email: info@example.com</p>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;
