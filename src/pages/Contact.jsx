import React from "react";
import "./ContactUs.css";
import logo from "../assets/logo/Rajwadi jpg.jpg";
import SocialLinks from '../components/SocialLinks';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <img src={logo} alt="Logo" className="contact-logo" />

        <h2>Contact Us</h2>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> <a href="mailto:Rajwadichanijamavat@gmail.com">Rajwadichanijamavat@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            Ravi Sathavara 📞 <a href="tel:+916353940245">+91 63539 40245</a>
            <br />
            Hitesh Sathavara 📞 <a href="tel:+916353927208">+91 63539 27208</a>
          </p>
        </div>

        <div className="social-media">
          {/* <p>Follow us:</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
