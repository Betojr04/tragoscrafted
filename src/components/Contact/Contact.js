import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const [messageStatus, setMessageStatus] = useState(""); // "" | "success" | "error"

  useEffect(() => {
    emailjs.init("h7qtBGRh6qB0fQxjF");
  }, []);

  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_aqzyxs7", "template_fjipilz", formRef.current)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setMessageStatus("success"); // Set success state
        formRef.current.reset(); // Clear form fields
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setMessageStatus("error"); // Set error state
      });
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setMessageStatus("");
  };

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
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder=" "
                required
              />
              <label className="floating-label">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder=" "
                required
              />
              <label className="floating-label">Your Email</label>
            </div>
            {/* New Phone Number Field */}
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                name="phone_number"
                placeholder=" "
                required
              />
              <label className="floating-label">Your Phone Number</label>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder=" "
                required
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e); // Trigger form submission on Enter
                  }
                }}
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

      {/* Modal Section */}
      {messageStatus && (
        <div className="modal">
          <div className="modal-content">
            {messageStatus === "success" ? (
              <h3 className="modal-title">Message Sent Successfully!</h3>
            ) : (
              <h3 className="modal-title">Failed to Send Message</h3>
            )}
            <p className="modal-message">
              {messageStatus === "success"
                ? "Thank you for reaching out! We will get back to you soon."
                : "Something went wrong. Please try sending your message again."}
            </p>
            <button className="btn btn-primary" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
