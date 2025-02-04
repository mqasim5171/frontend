import React, { useState } from "react";
import "./AccountModal.css";

const AccountModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggle between Sign In and Sign Up forms
  const toggleMode = () => setIsSignUp((prev) => !prev);

  // If the modal is not open, render nothing.
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}  // Prevent closing when clicking inside modal
      >
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form className="account-form">
          {isSignUp && (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p>
          {isSignUp
            ? "Already have an account? "
            : "Don't have an account? "}
          <span className="toggle-link" onClick={toggleMode}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AccountModal;
