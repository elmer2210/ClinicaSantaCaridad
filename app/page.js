"use client";
import React from 'react';
import NavbarComponent from '@/components/Narbar/Narbar.component';
import FooterComponent from '@/components/Footer/Footer.component';
import AboutUsComponent from '@/components/QuienesSomos/WhoWeAre.component';
import EspecialitesComponent from '@/components/Especialities/Especialities.component';
import ServicesComponent from '@/components/ClinicalServices/Services.component';
import LocationComponent from '@/components/Contact/Location.component';
import ContactSection from '@/components/Contact/Contactus.component';
import HeaderComponent from '@/components/Header/Header.component';


export async function generateStaticParams() {
  const data = await fetch('http://localhost:1337/api/carousels?populate[image][fields][0]=url')
  .then((res) => res.json())
  console.log(data)
  return data.map((data) =>{
    data:data
  })
}


export default function Home({ params }) {
  console.log(params)
  return (
    <main>
      <NavbarComponent />
      <HeaderComponent />
      <AboutUsComponent />
      <EspecialitesComponent />
      <ServicesComponent />
      <LocationComponent />
      {/*<ContactSection />*/}
      <FooterComponent />
    </main>
  )
}
