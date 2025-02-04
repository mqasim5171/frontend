import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Make sure you have styling defined in Hero.css

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-heading">Get All the Books You Need</h1>
        <p className="hero-subtext">
          Discover our amazing collection of books and find your next favorite read.
        </p>
        {/* Use Link to navigate to the shop page */}
        <Link to="/shop" className="explore-btn">
          Explore Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
