import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../assets/model2.webp";
import image2 from "../assets/image2.webp";
import image4 from "../assets/image1.webp";
import image5 from "../assets/tea.webp";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Brand Tea – Best Tea Franchise in Gujarat
      </h1>
      <Carousel
        showArrows
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
      >
        {[image1, image5, image4, image2].map((img, idx) => {
          const useContain = !isMobile || idx === 2;

          return (
            <div key={idx}>
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                style={{
                  maxHeight: "500px",
                  width: useContain ? "auto" : "100%",
                  objectFit: useContain ? "contain" : "cover",
                  margin: "0 auto",
                }}
              />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HeroSection;
