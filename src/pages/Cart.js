import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../pages/Cart.css";
import { Trash2 } from "lucide-react"; // Importing a trash icon

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map((book) => (
              <div key={book.id} className="cart-item">
                <img src={book.image} alt={book.title} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{book.title}</h4>
                  <p>Rs.{book.price}</p>
                  <div className="quantity-controls">
                    <button className="qty-btn" onClick={() => removeFromCart(book.id)}>-</button>
                    <span className="qty-count">{book.quantity}</span>
                    <button className="qty-btn" onClick={() => addToCart(book)}>+</button>
                    <Trash2 onClick={() => removeFromCart(book.id)} className="delete-icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Order Summary Section */}
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p className="subtotal">Subtotal: Rs.{cart.reduce((total, book) => total + book.price * book.quantity, 0)}</p>
        <button className="checkout-btn">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
