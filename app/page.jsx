"use client";

import React from 'react';
import NavbarComponent from '@/components/Narbar/Narbar.component';
import CarouselComponent from '@/components/Carousel/Carousel.component';
import FooterComponent from '@/components/Footer/Footer.component';
import AboutUsComponent from '@/components/QuienesSomos/WhoWeAre.component';
import EspecialitesComponent from '@/components/especialities/Especialities.component';


export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <CarouselComponent />
      <AboutUsComponent />
      <EspecialitesComponent />
      <FooterComponent />
    </main>
  )
}
