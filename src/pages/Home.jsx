import { Helmet } from "react-helmet-async";
import HeroSection from '../components/Herosection';
import ContactPopup from '../components/ContactPopup';
import AboutUsSection from '../components/AboutUsSection';
import ImageGrid from '../components/ImageGrid';
import Branches from '../components/Branches';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Brand Tea – Best Tea Franchise in Gujarat | Premium Tea Brand
        </title>

        <meta
          name="description"
          content="Brand Tea is one of the best tea franchise brands in Gujarat, offering premium tea and profitable franchise opportunities."
        />
      </Helmet>

      <HeroSection />
      <ContactPopup />
      <AboutUsSection />
      <ImageGrid />
      <Branches />
      <SocialLinks />
    </>
  );
};

export default Home;