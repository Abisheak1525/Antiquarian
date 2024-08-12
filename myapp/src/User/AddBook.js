import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './AddBook.css';
import { useNavigate } from 'react-router-dom';

export default function AddBook({ onClose }) {
  const [showMessage, setShowMessage] = useState(false);
  const [bookDetails, setBookDetails] = useState({
    name: '',
    author: '',
    bookPrize: '',
    userPrize: '',
    description: '',
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();

  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUploadClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleEditProfileClick = () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }
    formData.append('name', bookDetails.name);
    formData.append('author', bookDetails.author);
    formData.append('bookPrize', bookDetails.bookPrize);
    formData.append('userPrize', bookDetails.userPrize);
    formData.append('description', bookDetails.description);

    axios.post('http://localhost:9001/addBooks', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        setShowMessage(true);
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      })
      .catch(error => {
        console.error('There was an error adding the book!', error);
      });
  };

  const handleBackClick = () => {
    console.log('Back button clicked');
    if (onClose) {
      onClose();
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleBackClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="addbook-all">
      <div className="addbook-container" ref={modalRef}>
      <span 
        className="profile-close" 
        onClick={() => { console.log('Direct click'); handleBackClick(); }}>
        &times;
      </span>
        <div className="addbook-header">
          <h2>Book Details</h2>
        </div>
        <div className="addbook-form">
          <div className="addbook-photo-section">
            {selectedFiles.length > 0 && (
              <div className="file-names">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="file-name">
                    {file.name}
                  </div>
                ))}
              </div>
            )}
            <button className="addbook-change-photo-button" onClick={handleUploadClick}>Upload images</button>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              multiple
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
              <button className="addbook-save-button" onClick={handleEditProfileClick}>Save</button>
            </div>
            {showMessage && <div className="addbook-message">Check mail for book details</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
