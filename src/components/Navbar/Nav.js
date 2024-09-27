import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">TragosCrafted</div>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`nav-links ${open ? "open" : ""}`}>
        <div
          onClick={() => setOpen(false)}
          className={activeSection === "about" ? "active" : ""}
        >
          <a href="#about">ABOUT</a>
        </div>
        <div
          onClick={() => setOpen(false)}
          className={activeSection === "services" ? "active" : ""}
        >
          <a href="#services">SERVICES</a>
        </div>
        <div
          onClick={() => setOpen(false)}
          className={activeSection === "whyus" ? "active" : ""}
        >
          <a href="#whyus">WHY US</a>
        </div>

        <div
          onClick={() => setOpen(false)}
          className={activeSection === "expectations" ? "active" : ""}
        >
          <a href="#expectations">EXPECTATIONS</a>
        </div>
        <div
          onClick={() => setOpen(false)}
          className={activeSection === "contact" ? "active" : ""}
        >
          <a href="#contact">GET IN TOUCH</a>
        </div>
      </div>
    </nav>
  );
};
