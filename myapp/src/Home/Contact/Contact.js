import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact" className="contact-all">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us by filling out the form below.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Feel free to write your queries"
              required
            ></textarea>
          </div>
          <button className="cont-btn" type="submit">Submit</button>
        </form>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Your query has been sent.</p>
            <button className="popup-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
