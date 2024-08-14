import React, { useState } from 'react';
import './Payment.css';
import { useLocation } from 'react-router-dom';
import Header from '../Home/Header/Header';
import Footer from '../Footer/Footer';
import { ButtonGroup } from '@mui/material';

const Payment = () => {
    const { state } = useLocation();
    const selectedItems = state?.selectedItems || [];

    const [showModal, setShowModal] = useState(false);
    const [hovered, setHovered] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

    const [addressDetails, setAddressDetails] = useState({
        name: '',
        phone: '',
        country: '',
        address: '',
        town: '',
        district: '',
        state: '',
        pincode: ''
    });

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handlePaymentMethodSelect = (index) => {
        setSelectedMethod(index);
        setShowConfirmationPopup(true);
    };

    const handleConfirmationCancel = () => {
        setShowConfirmationPopup(false);
    };

    const handleProceedToPayment = () => {
        if (methods[selectedMethod] === 'Cash On Delivery') {
            alert('You have selected Cash On Delivery. Your order will be processed.');
        } else {
            setShowConfirmationPopup(false);
            setShowPaymentForm(true);
        }
    };

    const handlePaymentFormClose = () => {
        setShowPaymentForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddressDetails(prevDetails => ({ ...prevDetails, [name]: value }));
    };

    const bookPrice = selectedItems.reduce((total, item) => total + item.price, 0);
    const shippingFee = 30;
    const serviceTax = 15;
    const total = bookPrice + shippingFee + serviceTax;

    const methods = [
        'CREDIT CARD',
        'DEBIT CARD',
        'Cash On Delivery'
    ];

    return (
        <div className="payment-charges-all"><br/><br/><br/><br/>
        
        <div className="payment-charges-container">
            <h2>Charges for Your Selected Books</h2>
           
            {selectedItems.map((item, index) => (
                <div key={index} className="payment-charges-item">
                    <div className="payment-charges-description">
                        <h3>{item.title} - ₹ {item.price.toLocaleString()}</h3>
                        
                    </div>
                </div>
            ))
            }
            
            <div className="payment-adderess-details">
                <h3>Shipping Address</h3>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={addressDetails.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input 
                            type="text" 
                            name="phone" 
                            value={addressDetails.phone}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Country/Region</label>
                        <input 
                            type="text" 
                            name="country" 
                            value={addressDetails.country}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <textarea 
                            className="shipping-address-textarea"
                            name="address"
                            value={addressDetails.address}
                            onChange={handleInputChange}
                            placeholder="Enter your address here..."
                            rows="4"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Town</label>
                        <input 
                            type="text" 
                            name="town" 
                            value={addressDetails.town}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>District</label>
                        <input 
                            type="text" 
                            name="district" 
                            value={addressDetails.district}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input 
                            type="text" 
                            name="state" 
                            value={addressDetails.state}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Pincode</label>
                        <input 
                            type="text" 
                            name="pincode" 
                            value={addressDetails.pincode}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </form>
            </div>
            <br></br>
            <div className="payment-charges-item">
                <div className="payment-charges-amount">
                   Shipping Fee - ₹ {shippingFee.toLocaleString()}
                </div>
            </div>
            <div className="payment-charges-item">
                
                <div className="payment-charges-amount">
                    Service Tax - ₹ {serviceTax.toLocaleString()}
                </div>
            </div>
            <div className="payment-charges-total">
                <h3>Total Amount</h3>
                <div className="payment-charges-amount">
                    ₹ {total.toLocaleString()}
                </div>
            </div>
            <div className="payment-charges-details-link">
                <button onClick={handleModalOpen}>Charges Details</button>
            </div>
    
            {showModal && (
                <div className="payment-charges-modal-overlay">
                    <div className="payment-charges-modal">
                        <h2>Charges Details</h2>
                        <ul>
                            {selectedItems.map((item, index) => (
                                <li key={index}>{item.title}: ₹ {item.price.toLocaleString()}</li>
                            ))}
                            <li>Shipping Fee: ₹ {shippingFee.toLocaleString()}</li>
                            <li>Service Tax: ₹ {serviceTax.toLocaleString()}</li>
                            <li><strong>Total: ₹ {total.toLocaleString()}</strong></li>
                        </ul>
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
    
            <h2>Select Payment Method</h2>
            <div className="payment-charges-container-methods">
                {methods.map((method, index) => (
                    <div
                        key={index}
                        className={`payment-charges-method-item ${hovered === index ? 'hovered' : ''}`}
                        onMouseEnter={() => setHovered(index)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => handlePaymentMethodSelect(index)}
                    >
                        {method}
                    </div>
                ))}
            </div>
    
            {showConfirmationPopup && (
                <div className="payment-popup-overlay">
                    <div className="payment-popup">
                        <h2>Confirm Payment</h2>
                        <p>You have selected <strong>{methods[selectedMethod]}</strong> as your payment method.</p>
                        <p>Would you like to proceed to the payment details?</p>
                        <div className="payment-popup-buttons">
                            <button onClick={handleProceedToPayment}>Proceed</button>
                            <button onClick={handleConfirmationCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
    
            {showPaymentForm && (
                <div className="payment-payment-modal-overlay">
                    <div className="payment-payment-modal">
                        <h2>Enter Credit Card Details</h2>
                        <form className="payment-payment-form">
                            <label>
                                Card Number
                                <input type="text" required />
                            </label>
                            <label>
                                Expiry
                                <input type="text" placeholder="MM/YY" required />
                            </label>
                            <label>
                                CVV
                                <input type="text" required />
                            </label>
                            <label>
                                Name on Card
                                <input type="text" required />
                            </label>
                            <button type="submit">Proceed</button>
                        </form>
                        <button onClick={handlePaymentFormClose}>Close</button>
                    </div>
                </div>
            )}<br/>
            <button className="payment-checkout-button" type="submit">check-Out</button>
        </div>
            <br/>
        </div>
    );
};

export default Payment;
