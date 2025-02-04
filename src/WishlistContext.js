import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => [...prevWishlist, book]);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
