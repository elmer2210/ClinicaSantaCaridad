"use client";

import React from 'react';
import NavbarComponent from '@/components/Narbar/Narbar.component';
import CarouselComponent from '@/components/Carousel/Carousel.component';
import FooterComponent from '@/components/Footer/Footer.component';
import AboutUsComponent from '@/components/QuienesSomos/WhoWeAre.component';
import EspecialitesComponent from '@/components/Especialities/Especialities.component';
import ServicesComponent from '@/components/ClinicalServices/Services.component';
import LocationComponent from '@/components/Contact/Location.component';
import ContactSection from '@/components/Contact/Contactus.component';


export default function Home() {
  return (
    <main>
      <NavbarComponent />
      <CarouselComponent />
      <AboutUsComponent />
      <EspecialitesComponent />
      <ServicesComponent />
      <LocationComponent />
      {/*<ContactSection />*/}
      <FooterComponent />
    </main>
  )
}
