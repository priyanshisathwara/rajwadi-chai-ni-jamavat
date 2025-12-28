"use client";

import { useState, useEffect } from "react";
import FranchiseImage from "../assets/image4.jpeg";
import "./ContactPopup.css";
import WhatsAppButton from "./WhatsAppButton";

export default function ContactPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get in touch soon.");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="popup-close" onClick={() => setShowPopup(false)}>
          &times;
        </button>

        {/* Left Image */}
        <div className="popup-left">
          <img src={FranchiseImage} alt="Contact" className="popup-image" />
        </div>

        <div className="popup-right">
          <WhatsAppButton showButton={true} />
        </div>
      </div>
    </div>
  );
}
