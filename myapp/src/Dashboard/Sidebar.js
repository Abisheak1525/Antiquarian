import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file

function Sidebar() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/home');
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Antiquarian</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dash" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/dash/users" className="sidebar-link">Users</Link>
        </li>
        <li>
          <Link to="/dash/books" className="sidebar-link">Books</Link>
        </li>
        <li>
          <Link to="/dash/auct" className="sidebar-link">Books in Auction</Link>
        </li>
        <li>
          <Link to="/dash/order" className="sidebar-link">Orders</Link>
        </li>
      </ul>
      <button onClick={handleExit} className="sidebar-exit">Home</button>
    </div>
  );
}

export default Sidebar;
