import React from "react";
import Hero from "../components/Hero";

import BestSellers from "../components/Bestsellers"; // ✅ Make sure "BestSellers" matches exactly

const Home = () => {
  return (
    <div>
      <Hero />
      <BestSellers />
      
    </div>
  );
};

export default Home;
