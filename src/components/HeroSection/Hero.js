import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center text-white"
      data-aos="fade-up"
    >
      <div className="hero-content">
        <h1 className="hero-title">Craft Cocktails, Tailored for You</h1>
        <p className="hero-subtitle">
          Bringing the Bar Experience to Your Event
        </p>
        <a href="#contact">
          <button className="btn btn-lg btn-primary mt-4">Book Now</button>
        </a>
      </div>
    </section>
  );
};
