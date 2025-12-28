import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/logo/Rajwadi png.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-col">
          <img src={Logo} alt="Rajwadi Cha Ni Jamavat" className="footer-logo" />
          <p className="footer-desc">
            Rajwadi Cha Ni Jamavat brings you the authentic taste of royal tea,
            brewed with tradition, quality, and love.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/franchise">Franchise</Link></li>
            <li><Link to="/branches">Branches</Link></li>
            {/* <li><Link to="/careers">Careers</Link></li> */}
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom mb-5">
        © {new Date().getFullYear()} Rajwadi Cha Ni Jamavat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
