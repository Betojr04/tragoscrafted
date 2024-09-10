import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Form Section */}
        <div className="contact-form-container">
          <h2 className="contact-title" data-aos="fade-right">
            Get in Touch
          </h2>
          <p
            className="contact-subtitle"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Ready to elevate your event? Let’s talk!
          </p>
          <form
            className="contact-form"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder=" "
                required
              />
              <label className="floating-label">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder=" "
                required
              />
              <label className="floating-label">Your Email</label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder=" "
                required
              ></textarea>
              <label className="floating-label">Your Message</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Background Section */}
        <div className="contact-image-container" data-aos="fade-left">
          {/* Background image/pattern */}
        </div>
      </div>
    </section>
  );
};
