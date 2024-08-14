import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export default function AddBook({ onClose }) {
  const [showMessage, setShowMessage] = useState('');
  const [bookDetails, setBookDetails] = useState({
    name: '',
    author: '',
    bookPrize: '',
    userPrize: '',
    description: '',
    media: null, 
  });

  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState(''); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file.size > MAX_FILE_SIZE) {
      alert("File is too large. Please select a file smaller than 5MB.");
      return;
    }
    setBookDetails({ ...bookDetails, media: file });
    const fileURL = URL.createObjectURL(file);
    setPreview(fileURL);
    setFileName(file.name);
  };

  const validateForm = () => {
    // Basic validation example
    return bookDetails.name && bookDetails.author && bookDetails.bookPrize && bookDetails.userPrize;
  };

  const handleSaveClick = () => {
    if (!validateForm()) {
      alert("Please fill in all required fields.");
      return;
    }

    const formData = new FormData();
    for (const key in bookDetails) {
      formData.append(key, bookDetails[key]);
    }

    axios.post('http://localhost:9001/addBooks', formData)
      .then(response => {
        setShowMessage('Book added successfully!');
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      })
      .catch(error => {
        console.error('There was an error adding the book!', error);
        setShowMessage('Failed to add book. Please try again.');
      });
  };

  const handleBackClick = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(0);
    }
  };

  return (
    <div className="addbook-all">
      <div className="addbook-container">
        <span className="profile-close" onClick={handleBackClick}>&times;</span>
        <div className="addbook-header">
          <h2>Book Details</h2>
        </div>
        <div className="addbook-form">
          <div className="addbook-photo-section">
            {preview ? (
              <div className="media-preview">
                {bookDetails.media && bookDetails.media.type.startsWith('video/') ? (
                  <video controls className="addbook-photo" src={preview} />
                ) : (
                  <img src={preview} alt="Preview" className="addbook-photo" />
                )}
              </div>
            ) : (
              <img src="" alt="Upload" className="addbook-photo" />
            )}
            {fileName && (
              <div className="file-name">
                <p>{fileName}</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
              className="addbook-change-photo-button"
            />
          </div>
          <div className="addbook-details-section">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={bookDetails.name}
              onChange={handleInputChange}
            />
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={bookDetails.author}
              onChange={handleInputChange}
            />
            <label>Original Prize:</label>
            <input
              type="text"
              name="bookPrize"
              value={bookDetails.bookPrize}
              onChange={handleInputChange}
            />
            <label>Offered Prize:</label>
            <input
              type="text"
              name="userPrize"
              value={bookDetails.userPrize}
              onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
              name="description"
              value={bookDetails.description}
              onChange={handleInputChange}
            />
            <div className="addbook-buttons">
              <button className="addbook-save-button" onClick={handleSaveClick}>Save</button>
            </div>
            {showMessage && <div className="addbook-message">{showMessage}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
