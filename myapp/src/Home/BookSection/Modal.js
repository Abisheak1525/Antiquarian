// GalModal.js
import React, { useState, useEffect } from 'react';
import { useCart } from '../../Cart/CartContext';
import './Modal.css'; // Ensure you have this CSS file

const Modal = ({ book, onClose }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 500); 
  };

  if (!book) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-button" onClick={onClose}>&times;</span>
          <img src={book.image} alt={book.title} className="modal-image" />
          <div className="modal-details">
            <h3 className="modal-title">{book.title}</h3>
            <p className="modal-author">Author: {book.author}</p>
            <p className="modal-description">{book.description}</p>
            <p className="modal-price">₹{book.price}</p>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
      {showNotification && (
        <div className="notification-overlay">
          <div className="notification-content">
            <p>🎉</p>
            <p>Product added to cart</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
