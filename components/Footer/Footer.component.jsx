import '@/assets/css/footer.style.css';
import {BsFacebook, BsInstagram, BsPinMapFill} from 'react-icons/bs';
import {AiTwotonePhone, AiTwotoneMail} from 'react-icons/ai'

function FooterComponent() {
    return (
        <footer>
            <div className="containerFooter">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/logo_clinicaSantaCaridad.png" alt="Logo de la empresa" />
                    </div>
                    <div className="footer-info">
                        <div className="footer-contact">
                            <h4>Contactanos</h4>
                            <p> <AiTwotonePhone/> (123) 456-7890</p>
                            <p> <AiTwotoneMail/> info@example.com</p>
                        </div>
                        <div className="footer-contact">
                            <h4>Ubicanos <BsPinMapFill/></h4>
                            <p>Mitad del Mundo</p>
                            <p>Calle Daniel Cevallos</p>
                        </div>
                    </div>
                </div>
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
