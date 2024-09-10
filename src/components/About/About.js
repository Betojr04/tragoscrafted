import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay"></div>
      <div className="container" data-aos="fade-right">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1647725898157-aa8b4eb43832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJhcnRlbmRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Bartender in action"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h2 className="section-title">About Us</h2>
            <p>
              At TragosCrafted, we bring the energy and precision of high-volume
              bartending to your private events. With extensive experience in a
              fast-paced, high-volume restaurant bar, we specialize in
              delivering quality craft cocktails efficiently, without
              sacrificing creativity or attention to detail.
              <br></br>
              <br></br>
              Whether you’re hosting an intimate gathering or a large event, we
              ensure every guest enjoys a personalized drink experience. From
              classic cocktails to custom creations, we focus on quality,
              consistency, and service that stands out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
