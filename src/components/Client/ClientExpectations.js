import React from "react";
import "./ClientExpectations.css";
import { FaCheckCircle } from "react-icons/fa";

export const ClientExpectations = () => {
  return (
    <section className="expectations-section">
      <div className="container text-center">
        <h2 className="section-title" data-aos="fade-up">
          What You Can Expect
        </h2>
        <div className="timeline" data-aos="fade-up" data-aos-delay="100">
          <div className="timeline-step">
            <FaCheckCircle className="timeline-icon" />
            <h5>Consultation</h5>
            <p>We’ll discuss your event needs and create a custom bar menu.</p>
          </div>
          <div className="timeline-step">
            <FaCheckCircle className="timeline-icon" />
            <h5>Setup & Preparation</h5>
            <p>
              We arrive early to set up everything, ensuring a seamless event.
            </p>
          </div>
          <div className="timeline-step">
            <FaCheckCircle className="timeline-icon" />
            <h5>Exceptional Service</h5>
            <p>
              Your guests enjoy delicious cocktails and professional service.
            </p>
          </div>
          <div className="timeline-step">
            <FaCheckCircle className="timeline-icon" />
            <h5>Cleanup</h5>
            <p>
              We handle the cleanup, so you don’t have to worry about a thing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
