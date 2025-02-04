import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Right Side - Text Section */}
      <motion.div
        className="text-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-text">Get all the books you need!</h1>
        <p className="hero-subtext">Discover your next great read today.</p>
        <motion.button
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
