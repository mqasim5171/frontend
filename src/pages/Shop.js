import React, { useState, useContext } from "react";
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
  { id: 1, title: "The Great Gatsby", genre: "Fiction", author: "F. Scott Fitzgerald", price: "$10", image: gatsby },
  { id: 2, title: "Becoming", genre: "Non-Fiction", author: "Michelle Obama", price: "$12", image: becoming },
  { id: 3, title: "Harry Potter and the Sorcerer's Stone", genre: "Kids", author: "J.K. Rowling", price: "$15", image: harryPotter },
  { id: 4, title: "Pride and Prejudice", genre: "Romantic", author: "Jane Austen", price: "$8", image: prideAndPrejudice },
  { id: 5, title: "Gone Girl", genre: "Thriller", author: "Gillian Flynn", price: "$11", image: goneGirl },
  { id: 6, title: "1984", genre: "Fiction", author: "George Orwell", price: "$9", image: nineteenEightyFour },
  { id: 7, title: "The Alchemist", genre: "Fiction", author: "Paulo Coelho", price: "$13", image: alchemist },
  { id: 8, title: "Educated", genre: "Non-Fiction", author: "Tara Westover", price: "$14", image: educated },
  { id: 9, title: "The Hobbit", genre: "Fiction", author: "J.R.R. Tolkien", price: "$10", image: hobbit },
  { id: 10, title: "The Da Vinci Code", genre: "Mystery", author: "Dan Brown", price: "$12", image: daVinciCode },
];

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  // Function to filter books based on search, genre, and author
  const filteredBooks = booksData.filter((book) => {
    return (
      (selectedGenre ? book.genre === selectedGenre : true) &&
      (selectedAuthor ? book.author === selectedAuthor : true) &&
      (searchTerm
        ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
        : true)
    );
  });

  return (
    <div className="shop-container">
      {/* Sidebar Container */}
      <div className="sidebar-container">
        {/* Single Search Input */}
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        {/* Genre Filter */}
        <div className="sidebar">
          <h3>Genres</h3>
          <ul>
            {["Fiction", "Non-Fiction", "Kids", "Romantic", "Thriller", "Mystery"].map((genre) => (
              <li
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={selectedGenre === genre ? "active-filter" : ""}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>

        {/* Author Filter */}
        <div className="sidebar">
          <h3>Authors</h3>
          <ul>
            {["F. Scott Fitzgerald", "Michelle Obama", "J.K. Rowling", "Jane Austen", "Gillian Flynn", "George Orwell", "Paulo Coelho", "Tara Westover", "J.R.R. Tolkien", "Dan Brown"].map((author) => (
              <li
                key={author}
                onClick={() => setSelectedAuthor(author)}
                className={selectedAuthor === author ? "active-filter" : ""}
              >
                {author}
              </li>
            ))}
          </ul>
        </div>

        {/* Reset Filters Button */}
        <button
          className="reset-btn"
          onClick={() => {
            setSearchTerm("");
            setSelectedGenre(null);
            setSelectedAuthor(null);
          }}
        >
          Reset Filters
        </button>
      </div>

      {/* Books Section */}
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.genre}</p>
              <p className="book-price">{book.price}</p>
              <button onClick={() => addToCart(book)}>🛒 Add to Cart</button>
              <button className="wishlist-btn" onClick={() => addToWishlist(book)}>❤️ Wishlist</button>
            </div>
          ))
        ) : (
          <p className="no-results">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
