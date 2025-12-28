import "./SocialLinks.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links d-flex flex-column">
        <div>
            <h1> Follow Us on </h1>
        </div>
        <div className="d-flex gap-2">
      <a
        href="https://www.instagram.com/yourpagehttps://www.instagram.com/rajwadi.chaa?igsh=MTlpamI1ajR1eTBqdA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-icon instagram"
      >
        <FaInstagram /> Instagram
      </a>

      <a
        href="https://www.facebook.com/share/1B9Ps7QBzD"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-icon facebook"
      >
        <FaFacebookF /> Facebook
      </a>
      </div>
    </div>
  );
};

export default SocialLinks;
