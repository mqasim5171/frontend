import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { CartContext } from "../CartContext";
import AccountModal from "./AccountModal";
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const openAccountModal = () => setIsAccountModalOpen(true);
  const closeAccountModal = () => setIsAccountModalOpen(false);

  return (
       
    <nav className="navbar">
      {/* Left: Bookstore Name */}
      <div className="navbar-left">
        <Link to="/" className="logo">📚 My Bookstore</Link>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">Shop</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Right: Icons */}
      <div className="navbar-right">
        <Link to="/wishlist" className="nav-icon">
          <FaHeart />
        </Link>
        <Link to="/cart" className="nav-icon">
          <FaShoppingCart />
          {cart.length > 0 && (
            <span className="cart-count">{cart.length}</span>
          )}
        </Link>
        <button className="nav-icon account-btn" onClick={openAccountModal}>
          <FaUser />
        </button>
      </div>

      {/* Account Modal */}
      <AccountModal isOpen={isAccountModalOpen} onClose={closeAccountModal} />
    </nav>
  );
};

export default Navbar;
