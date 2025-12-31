import React from "react";
import "./ContactUs.css";
import logo from "../assets/logo/Rajwadi jpg.jpg";
import SocialLinks from "../components/SocialLinks";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <div className="contact-page">
        <h1 style={{zIndex: "-1"}} className="position-absolute top-0">Contact Rajwadi Cha Ni Jamavat</h1>

        <p style={{zIndex: "-1"}} className="position-absolute top-0">
          Get in touch with us for tea franchise opportunities, support, or any
          business-related inquiries across Gujarat.
        </p>

      <Helmet>
        <title>
          Contact Rajwadi Cha Ni Jamavat | Tea Franchise & Support Gujarat
        </title>

        <meta
          name="description"
          content="Contact Rajwadi Cha Ni Jamavat for tea franchise opportunities, support, and business inquiries across Gujarat. Call or email us today."
        />

        <link
          rel="canonical"
          href="https://rajwadichanijamavat.com/contact"
        />
      </Helmet>

      <div className="contact-container">
        <img
          src={logo}
          alt="Rajwadi Cha Ni Jamavat Tea Brand Logo"
          className="contact-logo"
        />

        <h2>Contact Us</h2>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Rajwadichanijamavat@gmail.com">
              Rajwadichanijamavat@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            Ravi Sathavara 📞{" "}
            <a href="tel:+916353940245">+91 63539 40245</a>
            <br />
            Hitesh Sathavara 📞{" "}
            <a href="tel:+916353927208">+91 63539 27208</a>
          </p>
        </div>

        <div className="social-media">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
