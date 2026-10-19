
import React, { useState, useEffect } from "react";
import './Home.css';

import img1 from "../img/image1.jpg";
import img2 from "../img/image2.jpg";
import img3 from "../img/image3.jpg";
import img4 from "../img/image4.jpg";

const images = [img1, img2, img3,img4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="home-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-orbit orbit-one" aria-hidden="true"><span>◌</span></div>
      <div className="hero-orbit orbit-two" aria-hidden="true"><span>✦</span></div>
      <div className="hero-status" aria-hidden="true">
        <span className="status-light" /> All systems calm
        <strong>24<span>/</span>7</strong>
      </div>
      <div className="overlay-text">
        <p className="eyebrow">SMART LIVING, SIMPLIFIED</p>
        <h1>Make your home <em>think</em> for you.</h1>
        <p className="hero-copy">Intelligent automation that brings comfort, security, and energy efficiency into every room.</p>
        <a className="primary-button" href="#services">Explore solutions <span aria-hidden="true">↗</span></a>
      </div>
      <div className="sliding-buttons">
        <button aria-label="Previous slide" onClick={handlePrev} className="prev-button">
          &lt;
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`dot ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
        <button aria-label="Next slide" onClick={handleNext} className="next-button">
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Home;
