import React from "react";
import "./ClientExpectations.css";
import { FaCheckCircle } from "react-icons/fa";

export const ClientExpectations = () => {
  return (
    <section id="expectations" className="client-expectations-section">
      <div className="container text-center">
        <h2 className="section-title">What You Can Expect</h2>
        <div className="timeline">
          <div className="timeline-step">
            <h5>Consultation</h5>
            <p>Discuss event needs and create a custom bar menu.</p>
          </div>
          <div className="timeline-step">
            <h5>Setup & Preparation</h5>
            <p>Arrive early to set up and prepare everything.</p>
          </div>
          <div className="timeline-step">
            <h5>Exceptional Service</h5>
            <p>Provide professional bartending and delicious drinks.</p>
          </div>
          <div className="timeline-step">
            <h5>Cleanup</h5>
            <p>We handle the cleanup so you can relax.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
