import React from "react";
import "./Services.css";
import { FaCocktail, FaTools, FaConciergeBell } from "react-icons/fa";

const services = [
  {
    title: "Signature Cocktails",
    description: "Custom-crafted cocktails for your event.",
    icon: <FaCocktail />
  },
  {
    title: "Event Setup",
    description: "Full bar setup and teardown.",
    icon: <FaTools />
  },
  {
    title: "Professional Bartending",
    description: "Top-tier bartending service.",
    icon: <FaConciergeBell />
  }
];

export const Services = () => {
  return (
    <section id="services" className="services-section container text-center">
      <h2 className="section-title" data-aos="fade-up">
        Our Services
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card shadow"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="service-icon">{service.icon}</div>
            <h5>{service.title}</h5>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
