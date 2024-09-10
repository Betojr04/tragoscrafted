import React from "react";
import { FaCocktail, FaConciergeBell, FaGlassCheers } from "react-icons/fa";
import "./WhyChooseUs.css";

export const WhyChooseUs = () => {
  return (
    <section id="whyus" className="why-choose-us-section">
      <div className="container">
        <div className="why-choose-us-content">
          <div className="why-choose-us-text" data-aos="fade-right">
            <h2 className="section-title">Why Choose Us?</h2>
            <ul className="why-list">
              <li>
                <FaCocktail className="why-icon" />
                <div>
                  <strong>Quality Cocktails:</strong> Experience in creating a
                  variety of craft cocktails to suit any event.
                </div>
              </li>
              <li>
                <FaConciergeBell className="why-icon" />
                <div>
                  <strong>Seamless Service:</strong> Professional and efficient
                  from setup to cleanup, ensuring a smooth experience.
                </div>
              </li>
              <li>
                <FaGlassCheers className="why-icon" />
                <div>
                  <strong>Personalized Experience:</strong> Custom drink menus
                  tailored specifically to your event and guest preferences.
                </div>
              </li>
            </ul>
          </div>
          <div className="why-choose-us-image" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1647404249310-fc06bd0c11f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJhcnRlbmRpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Bartending"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
