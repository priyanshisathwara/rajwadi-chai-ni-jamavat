import './WhatsAppButton.css';
import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppButton = ({ showButton = false }) => {
  const phoneNumber = "6353940245";
  const message = "Hi, I am interested in franchise";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  if (showButton) {
    return (
      <a href={whatsappLink} type="button" target='_blank' className="whatsapp-btn btn btn-success"><FaWhatsapp /> Contact Us on Whatsapp</a>
    );
  }
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fixed"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-text">Contact Us on Whatsapp</span>
    </a>
  );
};

export default WhatsAppButton;