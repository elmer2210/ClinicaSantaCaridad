import CarouselComponent from "../Carousel/Carousel.component";
import '@/assets/css/header.style.css'

const HeaderComponent = () =>{
    return(
       <header>
        <div className="header">
            <div className="header_carousel">
                <CarouselComponent />
            </div>
            <div className="header_card">
                <p className="header_card--black">Agenda tu</p>
                <p className="header_card--blue">Cita médica</p>
                <a href="http://" className="header_card--button">Agendar</a>
            </div>
        </div>
       </header>
    );
}

export default HeaderComponent;