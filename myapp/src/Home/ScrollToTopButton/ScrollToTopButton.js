// src/components/ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Fab from '@mui/material/Fab';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top ${showButton ? 'show' : 'hide'}`}>
      <Fab
        sx={{
            width: 40,
            height: 40, 
            minHeight: 40,
          backgroundColor: 'darkorange', 
          color: 'white', 
          '&:hover': {
            backgroundColor: 'black', 
          },
        }}
        aria-label="scroll to top"
        onClick={scrollToTop}
      >
        <ArrowUpwardIcon />
      </Fab>
    </div>
  );
};

export default ScrollToTopButton;
