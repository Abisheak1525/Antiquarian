import React from 'react';
import './DashAuction.css'; // Import the CSS file for the Auction page

// Sample data for auction items
const auctionList = [
  { id: 1, title: 'Rare Book One', author: 'Author X', currentBid: '$100.00', endDate: '2024-08-30', image: 'path/to/auction1.jpg' },
  { id: 2, title: 'Vintage Book Two', author: 'Author Y', currentBid: '$150.00', endDate: '2024-09-05', image: 'path/to/auction2.jpg' },
  { id: 3, title: 'Antique Book Three', author: 'Author Z', currentBid: '$200.00', endDate: '2024-09-10', image: 'path/to/auction3.jpg' }
];

// Sample data for auction requests
const auctionRequests = [
  { id: 1, title: 'Request for Rare Book', description: 'A request to auction a rare book.', user: 'John Doe', prize: '$500.00', date: '2024-08-15' },
  { id: 2, title: 'Vintage Collection Request', description: 'Request to auction a collection of vintage books.', user: 'Jane Smith', prize: '$1000.00', date: '2024-08-20' },
  { id: 3, title: 'Antique Book Request', description: 'Request to auction an antique book.', user: 'Alice Johnson', prize: '$750.00', date: '2024-08-25' }
];

function DashAuction() {
  return (
    <div className="dash-auction-container">
      <h2 className="dash-auction-title">Books in Auction</h2>
      <div className="dash-auction-card-container">
        {auctionList.map(auction => (
          <div className="dash-auction-card" key={auction.id}>
            <img src={auction.image} alt={auction.title} className="dash-auction-card-image" />
            <div className="dash-auction-card-content">
              <h4 className="dash-auction-card-title">{auction.title}</h4>
              <p className="dash-auction-card-author">by {auction.author}</p>
              <p className="dash-auction-card-bid">Current Bid: {auction.currentBid}</p>
              <p className="dash-auction-card-end-date">Ends on: {auction.endDate}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dash-auction-requests">
        <h3 className="dash-auction-requests-title">Auction Requests</h3>
        <table className="dash-auction-requests-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Title</th>
              <th>Description</th>
              <th>Prize</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {auctionRequests.map(request => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.user}</td>
                <td>{request.title}</td>
                <td>{request.description}</td>
                <td>{request.prize}</td>
                <td>{request.date}</td>
                <td>
                  <button className="dash-auction-requests-accept-button">Accept</button>
                  <button className="dash-auction-requests-reject-button">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashAuction;
