import React from 'react';
import './HomeNav.css';
import mainlogo from './mainlogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useUser } from '../context/UserContext'; // Import the useUser hook
import { Link } from 'react-router-dom';

const Homenav = () => {
  const { user } = useUser(); // Access user from context

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <header className="hm-header">
      <div className="hm-logo-container">
        <a onClick={scrollToTop}>
          <img src={mainlogo} alt="Logo" className="hm-logo" />
        </a>
      </div>
      <nav className="hm-navbar">
        <ul className="hm-nav-links">
          <li>
            <a href="#">Books</a>
            <ul className="dropdown">
              <li><a href="#Fiction">Fiction</a></li>
              <li><a href="#Non-Fiction">Non-fiction</a></li>
              <li><a href="#Mystery">Mystery</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Auction</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-user"></i> {user ? user.name : 'Profile'}
            </a>
            <ul className="dropdown" id="others">
              <li><a href="#">Profile</a></li>
              {/* <Link to="/cart"> */}
              <li><a href="#">Cart</a></li>
              {/* </Link> */}
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">LogOut</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Homenav;
