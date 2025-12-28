import React from 'react'
import HeroSection from '../components/Herosection';
import ContactPopup from '../components/ContactPopup';
import AboutUsSection from '../components/AboutUsSection';
import ImageGrid from '../components/ImageGrid';
import Branches from '../components/Branches';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <>
    <HeroSection />
    <ContactPopup />
    <AboutUsSection />
    <ImageGrid />
    <Branches />
    <SocialLinks />
    </>
  );
}

export default Home