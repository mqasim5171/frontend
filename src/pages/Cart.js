import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((book, index) => (
            <li key={index}>{book.title} - {book.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
