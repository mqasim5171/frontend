import React from "react";
import { motion } from "framer-motion";
import "./Bestsellers.css";

// ✅ Corrected Book Imports (Declared Before Usage)
import book1 from "../assets/book1.jpeg";
import book2 from "../assets/book2.webp";
import book3 from "../assets/book3.webp";
import book4 from "../assets/book4.jpg";

const books = [book1, book2, book3, book4];

const BestSellers = () => {
  return (
    <div className="bestsellers-container">
      <h2 className="bestsellers-title">Best Selling Books</h2>
      <div className="books-grid">
        {books.map((book, index) => (
          <motion.div
            key={index}
            className="book-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <img src={book} alt={`Book ${index + 1}`} className="book-image" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers; // ✅ Corrected export name
