import React, { useState } from 'react';
import './Header.css';
import mainlogo from './mainlogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Login from '../../Login/Login';
import Register from '../../Register/Register';
import Profile from '../../User/Profile';
import AddBook from '../../User/AddBook';
import userIcon from './user.png';

const Header = () => {
  const { user, setUser } = useUser();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false); // State for AddBook popup
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
    if (showRegister) setShowRegister(false);
  };

  const toggleRegisterModal = () => {
    setShowRegister(!showRegister);
    if (showLogin) setShowLogin(false);
  };

  const toggleProfileModal = () => {
    setShowProfile(!showProfile);
  };

  const toggleAddBookModal = () => {
    setShowAddBook(!showAddBook);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleProtectedNavigation = (e, path) => {
    e.preventDefault();
    if (user) {
      if (path === '/addbook') {
        toggleAddBookModal();
      } else {
        navigate(path);
      }
    } else {
      toggleLoginModal();
    }
  };

  return (
    <header className="gal-hm-header">
      <div className="gal-hm-logo-container">
        <a onClick={scrollToTop}>
          <img src={mainlogo} alt="Logo" className="gal-hm-logo" />
        </a>
      </div>
      <nav className="gal-hm-navbar">
        <ul className="gal-hm-nav-links">
          <li>
            <Link to="/" className="gal-hm-nav-link">Landing</Link>
          </li>
          <li>
            <Link to="/home" className="gal-hm-nav-link">Home</Link>
          </li>
          <li>
            <Link to="/auction" className="gal-hm-nav-link">Auction</Link>
          </li>
          <li>
            <Link to="/gallary" className="gal-hm-nav-link">Gallery</Link>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleProtectedNavigation(e, '/cart')}  className="gal-hm-nav-link">About Us</a>
          </li>
          {user ? (
            <li className="gal-hm-nav-item gal-dropdown">
              <span className="gal-hm-user-name"><img src={userIcon} className="user-icon" alt="User" onClick={toggleProfileModal} /></span>
              <ul className="gal-dropdown-content" id="gal-others">
                <li><a onClick={toggleProfileModal} className="gal-dropdown-link">Profile</a></li>
                <li><a href="/addbook" onClick={(e) => handleProtectedNavigation(e, '/addbook')} className="gal-dropdown-link">Add Books</a></li>
                <li><a href="/cart" onClick={(e) => handleProtectedNavigation(e, '/cart')} className="gal-dropdown-link">Cart</a></li>
                <li><a href="#" onClick={handleLogout} className="gal-dropdown-link">LogOut</a></li>
              </ul>
            </li>
          ) : (
            <li className="gal-hm-nav-item">
              <button onClick={toggleLoginModal} className="gal-hm-login-button">Login</button>
            </li>
          )}
        </ul>
      </nav>
      {showLogin && <Login onClose={toggleLoginModal} onRegister={toggleRegisterModal} />}
      {showRegister && <Register onClose={toggleRegisterModal} onLogin={toggleLoginModal} />}
      {showProfile && <Profile onClose={toggleProfileModal} />}
      {showAddBook && <AddBook />} 
    </header>
  );
};
export default Header;
