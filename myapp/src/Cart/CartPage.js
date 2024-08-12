import React, { useState } from 'react';
import { useCart } from './CartContext';
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  const handleItemClick = (itemId) => {
    handleCheckboxChange(itemId);
  };

  const handleRemoveClick = (item) => {
    setShowConfirmPopup(true);
    setItemToRemove(item);
  };

  const confirmRemove = () => {
    removeFromCart(itemToRemove.id);
    setShowConfirmPopup(false);
    setItemToRemove(null);
  };

  const cancelRemove = () => {
    setShowConfirmPopup(false);
    setItemToRemove(null);
  };

  const selectedItemsTotalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price, 0);

  const selectedItemsCount = selectedItems.length;

  const handleCheckout = () => {
    if (selectedItemsCount > 0) {
      navigate('/payment', { state: { selectedItems: cartItems.filter((item) => selectedItems.includes(item.id)) } });
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-content">
        <div className="cart-items">
          <table className="cart-table">
            <thead className='cart-thead'>
              <tr>
                <th className="select-hd"></th> 
                <th className="image-hd">Product</th>
                <th className="title-hd">Title</th>
                <th className="price-hd">Price</th>
                <th className="quantity-hd">Quantity</th>
                <th className="remove-hd"></th> 
              </tr>
            </thead>
            <tbody className="cart-body">
              {cartItems.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => handleItemClick(item.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="select-cell" onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="image-cell">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                  </td>
                  <td className="title-cell">{item.title}</td>
                  <td className="price-cell">₹{item.price}</td>
                  <td className="quantity-cell">1</td>
                  <td className="remove-cell" onClick={(e) => e.stopPropagation()}>
                    <button className="remove-button" onClick={() => handleRemoveClick(item)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-cost">
          <div className="cart-footer">
            <h3>Total Books: {selectedItemsCount}</h3>
            <h2 className="total-price">Total Price: ₹{selectedItemsTotalPrice.toFixed(2)}</h2>
          </div>
          <button
            className="continue-shopping-button"
            onClick={handleCheckout}
            disabled={selectedItemsCount === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      {showConfirmPopup && (
        <div className="confirm-popup">
          <div className="confirm-popup-content">
            <p>Are you sure you want to remove this item?</p>
            <button className="confirm-button" onClick={confirmRemove}>Remove</button>
            <button className="cancel-button" onClick={cancelRemove}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
