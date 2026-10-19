import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand"><span>upvoid<span className="brand-dot">.</span></span><p>Intelligence for everyday living.</p></div>
        <div className="footer-content">
          <p>📍 <strong>Location:</strong> Upvoid Technologies, Bengaluru</p>
          <p>📞 <strong>Phone:</strong> <a href="tel:+919632149165">+91 96321 49165</a></p>
          <p>📧 <strong>Email:</strong> <a href="mailto:contact@upvoidtech.com">contact@upvoidtech.com</a></p>
          <p>🌐 <strong>Website:</strong> <a href="https://www.upvoidtech.com" target="_blank" rel="noopener noreferrer">www.upvoidtech.com</a></p>
        </div>
        
        <div className="footer-social">
          <h3>Follow us on:</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn twitter">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-btn instagram">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">LinkedIn</a>
        </div>
      </div>
      <p className="footer-tagline">Transform your home with Upvoid Technologies – Where Innovation Meets Comfort!</p>
    </footer>
  );
};

export default Footer;