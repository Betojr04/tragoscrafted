import React from "react";
import "./Foot.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>Contact: info@yourcompany.com</div>
        <div className="footer-links">
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
        </div>
      </div>
      <div className="footer-copyright">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};
