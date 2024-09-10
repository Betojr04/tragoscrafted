import React from "react";
import "./Foot.css";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">Contact: contact@tragoscrafted.com</div>
        <div className="footer-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" /> {/* Instagram Icon */}
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 TragosCrafted. All rights reserved.
      </div>
    </footer>
  );
};
