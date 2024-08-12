// src/Dashboard/Users.js
import React from 'react';
import './Users.css'; // Import the CSS file for the Users page

function Users() {
  // Sample data for users with additional fields
  const usersList = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', phone: '123-456-7890', address: '123 Main St' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', phone: '987-654-3210', address: '456 Elm St' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', phone: '555-666-7777', address: '789 Maple Ave' }
  ];

  return (
    <div className="dash-users-container">
      <h2 className="dash-users-title" style={{color:"white"}}>User Management</h2>
      <table className="dash-users-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>
                <button className="dash-users-edit-button">Edit</button>
                <button className="dash-users-remove-button">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
