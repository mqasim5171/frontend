import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { WishlistContext } from "../WishlistContext";
import "./Shop.css";

// Import book images
import gatsby from "../assets/books/gatsby.jpg";
import becoming from "../assets/books/becoming.jpg";
import harryPotter from "../assets/books/harryPotter.jpg";
import prideAndPrejudice from "../assets/books/pnp.jpeg";
import goneGirl from "../assets/books/goneGirl.jpeg";
import nineteenEightyFour from "../assets/books/1984.jpeg";
import alchemist from "../assets/books/alchemist.jpg";
import educated from "../assets/books/educated.jpg";
import hobbit from "../assets/books/hobbit.jpg";
import daVinciCode from "../assets/books/daVinciCode.jpg";

const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    genre: "Fiction",
    author: "F. Scott Fitzgerald",
    price: "$10",
    image: gatsby,
  },
  {
    id: 2,
    title: "Becoming",
    genre: "Non-Fiction",
    author: "Michelle Obama",
    price: "$12",
    image: becoming,
  },
  {
    id: 3,
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Kids",
    author: "J.K. Rowling",
    price: "$15",
    image: harryPotter,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    genre: "Romantic",
    author: "Jane Austen",
    price: "$8",
    image: prideAndPrejudice,
  },
  {
    id: 5,
    title: "Gone Girl",
    genre: "Thriller",
    author: "Gillian Flynn",
    price: "$11",
    image: goneGirl,
  },
  {
    id: 6,
    title: "1984",
    genre: "Fiction",
    author: "George Orwell",
    price: "$9",
    image: nineteenEightyFour,
  },
  {
    id: 7,
    title: "The Alchemist",
    genre: "Fiction",
    author: "Paulo Coelho",
    price: "$13",
    image: alchemist,
  },
  {
    id: 8,
    title: "Educated",
    genre: "Non-Fiction",
    author: "Tara Westover",
    price: "$14",
    image: educated,
  },
  {
    id: 9,
    title: "The Hobbit",
    genre: "Fiction",
    author: "J.R.R. Tolkien",
    price: "$10",
    image: hobbit,
  },
  {
    id: 10,
    title: "The Da Vinci Code",
    genre: "Mystery",
    author: "Dan Brown",
    price: "$12",
    image: daVinciCode,
  },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  return (
    <div className="shop-container">
      {/* Sidebar for Genre & Author */}
      <div className="sidebar">
        <h3>Genres</h3>
        <ul>
          <li>Fiction</li>
          <li>Non-Fiction</li>
          <li>Kids</li>
          <li>Romantic</li>
          <li>Thriller</li>
          <li>Mystery</li>
        </ul>
        <h3>Authors</h3>
        <ul>
          <li>F. Scott Fitzgerald</li>
          <li>Michelle Obama</li>
          <li>J.K. Rowling</li>
          <li>Jane Austen</li>
          <li>Gillian Flynn</li>
          <li>George Orwell</li>
          <li>Paulo Coelho</li>
          <li>Tara Westover</li>
          <li>J.R.R. Tolkien</li>
          <li>Dan Brown</li>
        </ul>
      </div>

      {/* Books Section */}
      <div className="books-grid">
        {booksData.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p className="book-price">{book.price}</p>
            <button onClick={() => addToCart(book)}>🛒 Add to Cart</button>
            <button className="wishlist-btn" onClick={() => addToWishlist(book)}>
              ❤️ Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
