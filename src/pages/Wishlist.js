import React, { useContext } from "react";
import { WishlistContext } from "../WishlistContext";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((book, index) => (
            <li key={index}>{book.title} - {book.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Wishlist;
