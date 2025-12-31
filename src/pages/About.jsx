import "./About.css";
import shopImg from "../assets/logo/Rajwadi jpg.jpg";
import ownerImg from "../assets/owner.png";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="about-page">

      <Helmet>
        <title>
          About Rajwadi Cha Ni Jamavat | Trusted Tea Brand & Franchise in Gujarat
        </title>

        <meta
          name="description"
          content="Learn about Rajwadi Cha Ni Jamavat – a trusted tea brand from Gujarat known for authentic taste, quality, and a fast-growing tea franchise network."
        />

        <link
          rel="canonical"
          href="https://rajwadichanijamavat.com/about"
        />
      </Helmet>

      {/* Hero / Intro */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h1>About Rajwadi Cha Ni Jamavat</h1>

          <p>
            Rajwadi Cha Ni Jamavat is more than just a tea brand – it is a blend of
            tradition, taste, and trust. With a strong focus on quality and
            consistency, we serve authentic flavors loved by thousands of customers
            every day across Gujarat.
          </p>
        </div>

        <div className="about-hero-img">
          <img
            src={shopImg}
            alt="Rajwadi Cha Ni Jamavat Tea Shop in Gujarat"
          />
        </div>
      </div>

      {/* Owner Section */}
      <div className="about-owner">
        <div className="owner-text">
          <h2>Meet the Founders</h2>

          <b>Ravi Sathavara</b> <br />
          <b>Hitesh Sathavara</b>

          <p>
            The vision behind Rajwadi Cha Ni Jamavat comes from a passion for
            delivering the perfect cup of tea with a royal touch. Built on hard
            work, dedication, and customer satisfaction, the brand has grown from
            a single outlet to a rapidly expanding tea franchise network.
          </p>

          <p>
            Our founders believe in empowering entrepreneurs by providing a simple,
            affordable, and profitable tea franchise model.
          </p>
        </div>
      </div>

      {/* Franchise Model */}
      <div className="about-franchise">
        <h2>Our Tea Franchise Model</h2>

        <div className="franchise-points">
          <div className="franchise-card">
            💰 <strong>Investment:</strong> Just ₹2.71 Lakhs
          </div>
          <div className="franchise-card">
            🏪 <strong>35+ Active Branches</strong>
          </div>
          <div className="franchise-card">
            🌍 <strong>Presence in 21 Cities</strong>
          </div>
          <div className="franchise-card">
            📈 <strong>Low Risk & High Demand Business</strong>
          </div>
          <div className="franchise-card">
            🤝 <strong>Complete Setup & Training Support</strong>
          </div>
          <div className="franchise-card">
            ☕ <strong>Authentic & Consistent Tea Taste</strong>
          </div>
        </div>

        <p className="about-franchise-note">
          Anyone with passion and dedication can become a part of the Rajwadi Cha Ni
          Jamavat family. We provide full support from setup to daily operations.
        </p>
      </div>

    </section>
  );
};

export default About;
