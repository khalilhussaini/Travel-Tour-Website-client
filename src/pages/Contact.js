import React from "react";
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>
            <i className="fas fa-map-marker-alt"></i> 123 Street, City,
            Country
          </p>
          <p>
            <i className="fas fa-envelope"></i> example@example.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +123 456 7890
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
