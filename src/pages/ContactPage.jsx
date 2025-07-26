import React from "react";

export default function ContactPage() {
  return (
    <section id="contact" className="contact-page section">
      <div className="contact__wrapper">
        <h1>Contact Me</h1>

        <div className="contact-methods">
          <p>
            <strong>Email:</strong> jiyeon.han346@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +82-10-1234-5678
          </p>
          <p>
            <strong>Office Address:</strong> 52 Ewhayeodae-gil, Seodaemun-gu,
            Seoul, Korea
          </p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/HZie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jiyeon-han-a389931b3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <div className="captcha">
            <input type="text" placeholder="Enter CAPTCHA" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
