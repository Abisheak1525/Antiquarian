import React, { useState, useEffect } from 'react';
import './AuctionModal.css';

export default function AuctionModal({ item, onClose }) {
  const [activeTab, setActiveTab] = useState('description');
  const [remainingTime, setRemainingTime] = useState('Calculating...');
  const [recentBids, setRecentBids] = useState([
    { user: 'Alice', amount: '$150.00' },
    { user: 'Bob', amount: '$145.00' }
  ]);
  const [newBid, setNewBid] = useState('');
  const [topBid, setTopBid] = useState(item.topBid || '$0.00');

  useEffect(() => {
    if (item.endTime) {
      const calculateRemainingTime = () => {
        const endTime = new Date(item.endTime); // Replace with dynamic endTime from MySQL
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
          setRemainingTime('Auction Ended');
        } else {
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          setRemainingTime(`${hours}h ${minutes}m`);
        }
      };

      calculateRemainingTime();
      const interval = setInterval(calculateRemainingTime, 60000); // Update every minute

      return () => clearInterval(interval);
    }
  }, [item.endTime]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleBidSubmit = () => {
    if (newBid) {
      // Convert the new bid and current top bid to numbers
      const newBidAmount = parseFloat(newBid.replace('$', ''));
      const topBidAmount = parseFloat(topBid.replace('$', ''));

      // Update the top bid if the new bid is higher
      if (newBidAmount > topBidAmount) {
        setTopBid(`$${newBidAmount.toFixed(2)}`);
      }

      // Update the recent bids list
      setRecentBids([{ user: 'You', amount: newBid }, ...recentBids]);
      setNewBid('');
      // Optionally, send the new bid to the server here
    }
  };

  if (!item) return null;

  return (
    <div className="auction-modal-overlay" onClick={onClose}>
      <div className="auction-modal" onClick={(e) => e.stopPropagation()}>
        <span className="auction-modal-close" onClick={onClose}>&times;</span>
        <div className="auction-modal-tabs">
          <button
            className={`auction-modal-tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => handleTabClick('description')}
          >
            Description
          </button>
          <button
            className={`auction-modal-tab ${activeTab === 'bid' ? 'active' : ''}`}
            onClick={() => handleTabClick('bid')}
          >
            Bid
          </button>
        </div>
        <div className="auction-modal-content">
          <img src={item.image} alt={item.name} className="auction-modal-image" />

          {activeTab === 'description' && (
            <div className="auction-modal-details">
              <h3 className="auction-modal-title">{item.name}</h3>
              <p className="auction-modal-author">Author: {item.author}</p>
              <p className="auction-modal-user">User: {item.user}</p>
              <p className="auction-modal-description">{item.description}</p>
              <p className="auction-modal-bid">Start Bid: {item.startBid}</p>
            </div>
          )}

          {activeTab === 'bid' && (
            <div className="auction-modal-bid">
              <h3 className="auction-modal-title">{item.name}</h3>
              <p className="auction-modal-remaining-time">Remaining Time: {remainingTime}</p>
              <p className="auction-modal-top-bid">Top Bid: {topBid}</p>
              <input
                type="number"
                placeholder="Enter your bid"
                className="bid-input"
                value={newBid}
                onChange={(e) => setNewBid(e.target.value)}
              />
              <button className="bid-submit-btn" onClick={handleBidSubmit}>Place Bid</button>
              <div className="auction-modal-recent-bids">
                <h4>Recent Bids</h4>
                <ul>
                  {recentBids.map((bid, index) => (
                    <li key={index}>
                      {bid.user}: {bid.amount}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
