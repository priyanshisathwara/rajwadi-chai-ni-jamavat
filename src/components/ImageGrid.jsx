import "./ImageGrid.css";

import img1 from "../assets/item/1.png";
import img2 from "../assets/item/2.png";
import img3 from "../assets/item/3.png";
import img4 from "../assets/item/4.png";
import img5 from "../assets/item/5.png";
import img6 from "../assets/item/6.png";
import img7 from "../assets/item/7.png";
import img8 from "../assets/item/8.png";
import img9 from "../assets/item/9.png";

const images = [
  img1, img2, img3,
  img4, img5, img6,
  img7, img8, img9
];

const ImageGrid = () => {
  return (
    <section className="image-grid-section">
      <div className="image-grid">
        {images.map((img, index) => (
          <div className="image-card" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
