import "./Branches.css";
import { FaLocationDot } from "react-icons/fa6";

const cities = [
  "Vijapur",
  "Baroda",
  "Idar",
  "Khedbhrama",
  "Dahod",
  "Ahmedabad",
  "Godhra",
  "Gandhinagar",
  "Himmatnagar",
  "Jesawada",
  "Garbada",
  "Kadi Road",
  "Katvara",
  "Surat",
  "Kharedi",
  "Nava Bandar",
  "Pratij",
  "Diu"
];

const Branches = () => {
  return (
    <section className="branches-section">
      <h2>Our Branches</h2>
      <p>We proudly serve customers across multiple cities</p>

      <div className="branches-grid">
        {cities.map((city, index) => (
          <div className="branch-card" key={index}>
            <FaLocationDot style={{color:"red"}} /> {city}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
