import React from "react";
import "./About.css";
import yourImage from "../img/1.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-label">01 / ABOUT US</div>
      <div className="content-container">
        <div className="content">
          <h2>Technology that feels<br /><em>like home.</em></h2>
          <p>At Upvoid Technologies, we bring intelligence to your home with cutting-edge automation solutions tailored to your lifestyle. Our systems provide convenience, security, and energy efficiency at your fingertips.</p>
          <div className="about-meta">
            <div><strong>2020</strong><span>Founded in Bengaluru</span></div>
            <div><strong>360°</strong><span>Connected living</span></div>
          </div>
        </div>
        <div className="image">
          <img src={yourImage} alt="Modern smart home controls" />
          <span className="image-badge">Designed around<br />your everyday</span>
        </div>
      </div>
    </section>
  );
}

export default About;
