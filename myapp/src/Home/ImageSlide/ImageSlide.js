import React, { useState, useEffect } from 'react';
import './ImageSlide.css';
import hp from './library.jpeg';
import { FaSearch } from 'react-icons/fa';  
import { Link } from 'react-router-dom';

const slides = [
  {
    src: hp,
    heading: 'Welcome to Antiquarian',
    content: 'No.1 platform for book selling and buying ',
    link: '#'
  }
];

export default function ImageSlide() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const { src, heading, content, link } = slides[currentSlideIndex];

  return (
    <div className="slider" id="up-home" style={{ backgroundImage: `url(${src})` }}>
      <div className="slider-con">
        <div className="text-container">
          <h1 className="slide-head">{heading}</h1>
          <p className="slide-par">{content}</p>
          <button className="slidebutton">
            <a href={link}>
            <Link to="/gallary">
            View Collections
            </Link>
            </a>
            </button>
        </div>
        <div className="search-container">
          <Link to="/gallary">
            <input type="text" placeholder="Search for books..." className="search-box" />
            <FaSearch className="search-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
