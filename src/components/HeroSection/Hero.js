// Hero.js
import React from "react";
import "./Hero.css"; // Custom CSS for hero

export const Hero = () => {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center text-white"
      data-aos="fade-up"
    >
      <div className="text-center">
        <h1 className="display-3 fw-bold">Craft Cocktails, Tailored for You</h1>
        <p className="lead">Bringing the Bar Experience to Your Event</p>
        <button className="btn btn-lg btn-primary mt-4">Book Now</button>
      </div>
    </section>
  );
};
