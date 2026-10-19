import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#home">
        <span>upvoid<span className="brand-dot">.</span></span>
      </a>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a className="nav-cta" href="#callback">Let's talk <span aria-hidden="true">↗</span></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;