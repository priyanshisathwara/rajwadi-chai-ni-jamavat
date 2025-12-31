import "./Branches.css";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

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

      <Helmet>
        <title>
          Rajwadi Cha Ni Jamavat Branches | Tea Shops Across Gujarat
        </title>

        <meta
          name="description"
          content="Find Rajwadi Cha Ni Jamavat tea shops across Gujarat including Ahmedabad, Surat, Vadodara, Gandhinagar, Himmatnagar, and many more cities."
        />

        <link
          rel="canonical"
          href="https://rajwadichanijamavat.com/branches"
        />
      </Helmet>

      <h1>Rajwadi Cha Ni Jamavat Branches Across Gujarat</h1>

      <p>
        We proudly serve authentic Rajwadi tea lovers across multiple cities in
        Gujarat. Find your nearest Rajwadi Cha Ni Jamavat tea shop below.
      </p>

      <div className="branches-grid">
        {cities.map((city, index) => (
          <div className="branch-card" key={index}>
            <FaLocationDot style={{ color: "red" }} /> Rajwadi Cha - {city}
          </div>
        ))}
      </div>

    </section>
  );
};

export default Branches;
