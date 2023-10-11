// components/Carousel.js

import React, {Component, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@/assets/css/carousel.style.css';

function CarouselComponent() {

    const imagesFiles = [
        'atikah-akhtar-XJptUS8nbhs-unsplash.jpg', 
        'benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg', 
        'humberto-chavez-FVh_yqLR9eA-unsplash.jpg',
        'usman-yousaf-pTrhfmj2jDA-unsplash.jpg'
    ];
    return (
            <Carousel 
                autoPlay 
                dynamicHeight 
                infiniteLoop 
                showIndicators={false} 
                showThumbs={false}
            >
                {imagesFiles.map((filename, index) => (
                    <div key={index}>
                        <img src={`/images/${filename}`} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </Carousel>

    );
}

export default CarouselComponent;
