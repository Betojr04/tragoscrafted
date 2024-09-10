import React from "react";
import "./Foot.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import social media icons

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">Contact: contact@tragoscrafted.com</div>
        <div className="footer-links">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="social-icon" /> {/* Facebook Icon */}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" /> {/* Instagram Icon */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" /> {/* Twitter Icon */}
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 TragosCrafted. All rights reserved.
      </div>
    </footer>
  );
};
