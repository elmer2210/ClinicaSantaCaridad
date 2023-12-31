'use client';
import React from 'react';
import Slider from 'react-slick';
import {IoLogoWhatsapp} from 'react-icons/io'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/assets/css/cardSlider.style.css'; // Importa tus estilos CSS

const CardSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <div className='cardSlider'>
              <img className='cardSlider__img' src="" alt="" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                 <span>$ {item.price}</span>
              </div>
              <a href="">
                <IoLogoWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
