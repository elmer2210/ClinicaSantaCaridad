// components/Carousel.js
"use client";
import React, {useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/assets/css/carousel.style.css';
import Slider from 'react-slick';

function CarouselImageComponent({data}) {

    const [diapositivaActual, setDiapositivaActual] = useState(0);

    const settings = {
        dots:true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        beforeChange: (oldIndex, newIndex) => {
            // Antes de que el slider cambie de diapositiva
        },

        afterChange: (index) => {
            // Después de que el slider haya cambiado completamente de diapositiva
            setDiapositivaActual(index);
        }
    };
    
    
    return(
        <Slider {...settings}>
            {data.map((data, index)=>(
                <div key={data.id} className='carousel'>
                    <img className='carousel_image' src={data.urlimage} alt={`Imagen ${index + 1}`} />
                    <div className={`carousel_text ${diapositivaActual === index ? 'animar-texto' : ''}`}>
                        <h3 className={`carousel_text--title `}
                        >
                            {data.title}
                        </h3>
                        <p className="carousel_text--body">{data.description}</p>
                        {data.url !== null && data.url !== undefined && (
                            <a href={data.url} target='_blank' className="carousel_text--button">Agendar</a> 
                        )}
                    </div>
                </div>
            ))}
        </Slider> 
    )
}

export default CarouselImageComponent;
