import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
      >
        {[image1, image2, image3].map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              style={{ maxHeight: "300px", width: "fit-content", objectFit: "cover" }}
            />
            {/* <p className="legend">Legend {idx + 1}</p> */}
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
