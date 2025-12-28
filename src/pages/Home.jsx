import React from 'react'
import HeroSection from '../components/Herosection';
import ContactPopup from '../components/contactpopup';
import AboutUsSection from '../components/AboutUsSection';

const Home = () => {
  return (
    <>
    <HeroSection />
    <ContactPopup />
    <AboutUsSection /> 
    </>
  );
}

export default Home