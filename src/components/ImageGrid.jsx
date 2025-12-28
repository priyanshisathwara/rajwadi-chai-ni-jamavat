import "./ImageGrid.css";

// Tea
import rajwadi_tea from "../assets/item/rajwadi_tea.png";
import gud_tea from "../assets/item/gud_tea.jpeg";
import coffee from "../assets/item/coffee.jpeg";
import green_tea from "../assets/item/green_tea.png";
import lemon_tea from "../assets/item/lemon_tea.png";
import ginger_tea from "../assets/item/ginger_tea.jpeg";
import ginger_lemon from "../assets/item/ginger_lemon.png";
import hot_chocolate from "../assets/item/hot_chocolate.jpeg";
import kesari_ukala from "../assets/item/kesari_ukala.png";
import pink_tea from "../assets/item/pink_tea.png";

// Shake
import badam_shake from "../assets/item/badam_shake.png";
import oreo_shake from "../assets/item/oreo_shake.jpeg";
import butter_scotch_shake from "../assets/item/butter_scotch_shake.jpeg";
import strawberry_shake from "../assets/item/strawberry_shake.jpeg";
import blueberry_shake from "../assets/item/blueberry_shake.jpeg";
import mango_shake from "../assets/item/mango_shake.jpeg";
import badam_milk from "../assets/item/badam_milk.jpeg";
import cold_coffee from "../assets/item/cold_coffee.jpeg";

// Foods
import maska_bun from "../assets/item/maska_bun.png";
import thepla from "../assets/item/thepla.png";
import poha from "../assets/item/poha.png";
import nan_khatai_biscuit from "../assets/item/nan_khatai_biscuit.png";
import cream_roll from "../assets/item/cream_roll.png";
import puff from "../assets/item/puff.png";

const menuData = [
  {
    title: "Tea",
    items: [
      { name: "Rajwadi Tea", img: rajwadi_tea },
      { name: "Gud Tea", img: gud_tea },
      { name: "Coffee", img: coffee },
      { name: "Green Tea", img: green_tea },
      { name: "Lemon Tea", img: lemon_tea },
      { name: "Ginger Tea", img: ginger_tea },
      { name: "Ginger Lemon Tea", img: ginger_lemon },
      { name: "Hot Chocolate", img: hot_chocolate },
      { name: "Kesari Ukala", img: kesari_ukala },
      { name: "Pink Tea", img: pink_tea },
    ],
  },
  {
    title: "Shakes",
    items: [
      { name: "Badam Shake", img: badam_shake },
      { name: "Oreo Shake", img: oreo_shake },
      { name: "Butter Scotch Shake", img: butter_scotch_shake },
      { name: "Strawberry Shake", img: strawberry_shake },
      { name: "Blueberry Shake", img: blueberry_shake },
      { name: "Mango Shake", img: mango_shake },
      { name: "Badam Milk", img: badam_milk },
      { name: "Cold Coffee", img: cold_coffee },
    ],
  },
  {
    title: "Foods",
    items: [
      { name: "Maska Bun (4 Types)", img: maska_bun },
      { name: "Rajwadi Thepla", img: thepla },
      { name: "Poha", img: poha },
      { name: "Nan Khatai Biscuit", img: nan_khatai_biscuit },
      { name: "Cream Roll", img: cream_roll },
      { name: "Puff", img: puff },
    ],
  },
];

const ImageGrid = () => {
  return (
    <section className="image-grid-section">
      {menuData.map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category.title}</h2>
          <div className="about-underline"></div>

          <div className="image-grid">
            {category.items.map((item, idx) => (
              <div className="image-card" key={idx}>
                <img src={item.img} alt={item.name} />
                <b className="dish-name d-flex justify-content-center my-2">{item.name}</b>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageGrid;
