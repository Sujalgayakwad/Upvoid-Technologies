import React from "react";
import "./../styles/Services.css";
import img2 from "../img/custom-home.jpg";
import img3 from "../img/security.jpg";
import img4 from "../img/lighting.jpg";
import img5 from "../img/smart-office.jpg";
import img6 from "../img/water-automation.jpg";
import img7 from "../img/home-entertainment.jpg";

const services = [
  [img2, "Customizable Smart Home", "01"],
  [img3, "Security & Surveillance", "02"],
  [img4, "Smart Lighting", "03"],
  [img5, "Smart Office", "04"],
  [img6, "Water Automation", "05"],
  [img7, "Home Entertainment", "06"],
];

const Services = () => (
  <section id="services" className="services">
    <div className="section-label">02 / WHAT WE DO</div>
    <div className="services-heading">
      <h2>One home.<br /><em>Endless possibilities.</em></h2>
      <p>From the first switch in the morning to the last lock at night, every detail works together seamlessly.</p>
    </div>
    <div className="service-cards">
      {services.map(([image, title, number]) => (
        <article className="service-card" key={title}>
          <div className="service-image"><img src={image} alt={title} /><span>{number}</span></div>
          <h3>{title}</h3>
          <p className="service-caption">Thoughtful technology, beautifully integrated.</p>
          <span className="service-arrow" aria-hidden="true">↗</span>
        </article>
      ))}
    </div>
  </section>
);

export default Services;
