import AccordionComponent from "./Acordion.component";
import "@/assets/css/aboutus.style.css"

const AboutUsComponent = () => {
    return (        
    <section className="section_aboutUs">
            <div className="aboutUs">
                <h3 className="aboutUs_title"> Quienes somos</h3>
                <div className="aboutUs_content">
                    <div className="aboutUs_content--image">
                        {/* Imagen por Imagen de <a href="https://www.freepik.es/psd-gratis/doctor-preparandose-chequeo-medico-rutina_44989985.htm">Freepik</a> */}
                        <img src="/images/9109745.png" alt="Quienes somos" />
                    </div>
                    <div className="aboutUs_content--content">
                        <div className="containerContent">
                            Texto sobre quines somos
                        </div>
                        <div  className="containerContent">
                            <AccordionComponent title={'Mision'} content={'Lorem Ipsup'}/>
                            <AccordionComponent title={'Visión'} content={'Lorem Ipsup'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsComponent;