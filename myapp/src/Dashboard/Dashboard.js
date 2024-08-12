import React, { useState } from 'react';
import './Dashboard.css'; 
import icon from '../Home/Header/user.png';
import Profile from '../User/Profile';

function Navbar({ onProfileClick }) {
  return (
    <div className="dashboard-navbar">
      <div className="dashboard-navbar-left">
        <img 
          src={icon} 
          alt="Profile" 
          className="dashboard-profile-icon" 
          onClick={onProfileClick}
        />
      </div>
      <div className="dashboard-navbar-right">
        <input type="text" placeholder="Search..." className="dashboard-search-bar" />
      </div>
    </div>
  );
}

function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileOpen(false);
  };

  // Sample data for users
  const newUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: '******', mobile: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: '******', mobile: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', password: '******', mobile: '555-666-7777' }
  ];

  // Function to handle remove button click
  const handleRemove = (id) => {
    console.log(`Remove user with ID: ${id}`);
    // Add your remove logic here
  };

  return (
    <div className="dashboard-container">
      <Navbar onProfileClick={handleProfileClick} />
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome back, Mr. Admin</p>
        <div className="dashboard-stats">
          <div className="dashboard-stat-box">
            <h3>Total Books</h3>
            <p>500</p>
          </div>
          <div className="dashboard-stat-box">
            <h3>Total Orders</h3>
            <p>120</p>
          </div>
          <div className="dashboard-stat-box">
            <h3>Total Users</h3>
            <p>300</p>
          </div>
          <div className="dashboard-stat-box">
            <h3>Total Auctions</h3>
            <p>300</p>
          </div>
        </div>
        <div className="dashboard-users-table-container">
          <h2>New Users</h2>
          <table className="dashboard-users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {newUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button 
                      className="dashboard-remove-button"
                      onClick={() => handleRemove(user.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isProfileOpen && <Profile onClose={handleCloseProfile} />}
    </div>
  );
}

export default Dashboard;
