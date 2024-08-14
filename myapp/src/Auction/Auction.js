import React, { useState } from 'react';
import './Auction.css';
import image from '../Gallary/Book/Images/Fiction/got.jpg';
import image2 from '../Gallary/Book/Images/Fiction/hobbit.jpg';
import AuctionModal from './AuctionModal';

export default function Auction() {
  const [selectedItem, setSelectedItem] = useState(null); 

  const auctionItems = [
    {
      image: image,
      name: 'Vintage Book Title 1',
      author: 'Author Name 1',
      user: 'John Doe',
      description: 'This is a rare and vintage book that has been well-preserved over the years.',
      startBid: '100.00',
      topBid: '150.00'
    },
    {
      image: image2,
      name: 'Vintage Book Title 2',
      author: 'Author Name 2',
      user: 'Jane Smith',
      description: 'Another rare find, with an interesting history and great value.',
      startBid: '120.00',
      topBid: '180.00'
    }
  ];

  const handleCardClick = (item) => {
    setSelectedItem(item); 
  };

  const handleCloseModal = () => {
    setSelectedItem(null); 
  };

  return (
    <div className="auction-container">
      {auctionItems.map((item, index) => (
        <div
          className="auction-card"
          key={index}
          onClick={() => handleCardClick(item)} 
        >
          <img src={item.image} alt={item.name} className="auction-card-image" />
          <div className="auction-card-content">
            <h3 className="auction-card-title">{item.name}</h3>
            <p className="auction-card-author">Author: {item.author}</p>
            <p className="auction-card-user">User: {item.user}</p>
            <p className="auction-card-description">{item.description}</p>
            <p className="auction-card-start-bid">Starting Bid: {item.startBid}</p>
            <p className="auction-card-top-bid">Top Bid: {item.topBid}</p>
          </div>
        </div>
      ))}

      {selectedItem && (
        <AuctionModal item={selectedItem} onClose={handleCloseModal} /> 
      )}
    </div>
  );
}
