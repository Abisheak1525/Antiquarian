import React, { useState } from 'react';
import './MainSearch.css';
import img from './search-icon.png';

const MainSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="MainSearch-all">
      <div className="MS-content">
        <h1>
          Explore Our Collection of Over <span className="MS-highlight">11,000</span> Second-Hand Books! Discover Great Reads at Affordable Prices.
        </h1>
        <div className="MS-search-box">
          <input 
            type="text" 
            placeholder="Enter keywords..." 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
          />
          <button type="button" onClick={handleSearch}>
            <img src={img} alt="Search" />
          </button>
        </div>
        <div className="MS-help">
          <span>✨ Old books hold the whispers of the past, connecting us to bygone eras. ✨</span>
        </div>
      </div>
    </div>
  );
};

export default MainSearch;
