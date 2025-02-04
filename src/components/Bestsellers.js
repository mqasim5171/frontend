import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { WishlistContext } from "../WishlistContext";
import "./Bestsellers.css";

// Import images from your assets folder
import gatsby from "../assets/books/gatsby.jpg";
import becoming from "../assets/books/becoming.jpg";
import harryPotter from "../assets/books/harryPotter.jpg";
import prideAndPrejudice from "../assets/books/pnp.jpeg";
import goneGirl from "../assets/books/goneGirl.jpeg";
import nineteenEightyFour from "../assets/books/1984.jpeg";
import alchemist from "../assets/books/alchemist.jpg";
import educated from "../assets/books/educated.jpg";

// Define 8 best-selling books
const bestSellersData = [
  { id: 1, title: "The Great Gatsby", image: gatsby, price: "$10" },
  { id: 2, title: "Becoming", image: becoming, price: "$12" },
  { id: 3, title: "Harry Potter and the Sorcerer's Stone", image: harryPotter, price: "$15" },
  { id: 4, title: "Pride and Prejudice", image: prideAndPrejudice, price: "$8" },
  { id: 5, title: "Gone Girl", image: goneGirl, price: "$11" },
  { id: 6, title: "1984", image: nineteenEightyFour, price: "$9" },
  { id: 7, title: "The Alchemist", image: alchemist, price: "$13" },
  { id: 8, title: "Educated", image: educated, price: "$14" },
];

const BestSeller = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="bestseller-container">
      <h2 className="bestseller-heading">Best Sellers</h2>
      <div className="bestseller-grid">
        {bestSellersData.map((book) => (
          <div key={book.id} className="bestseller-card">
            <div className="image-container">
              <img src={book.image} alt={book.title} className="bestseller-image" />
              <div className="overlay">
                <button className="overlay-btn" onClick={() => addToCart(book)}>Add to Cart</button>
                <button className="overlay-btn" onClick={() => addToWishlist(book)}>Add to Wishlist</button>
              </div>
            </div>
            <h3 className="bestseller-title">{book.title}</h3>
            <p className="bestseller-price">{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
