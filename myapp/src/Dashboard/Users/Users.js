import React, { useState, useEffect } from 'react';
import './Users.css';
import axios from 'axios';

function Users() {
  const [usersList, setUsersList] = useState([]);
  const [editingUserEmail, setEditingUserEmail] = useState(null);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const [newUserData, setNewUserData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });
  const [error, setError] = useState('');
  const [showAddUserPopup, setShowAddUserPopup] = useState(false);
  const [showEditUserPopup, setShowEditUserPopup] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:9001/getusers'); 
        setUsersList(response.data);
      } catch (error) {
        setError('Error fetching users');
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (email) => {
    setEditingUserEmail(email);
    const user = usersList.find(user => user.email === email);
    setUpdatedUserData(user);
    setShowEditUserPopup(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({
      ...updatedUserData,
      [name]: value,
    });
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post('http://localhost:9001/updateProfile', updatedUserData);
      setUsersList(usersList.map(user => user.email === updatedUserData.email ? response.data : user));
      setShowEditUserPopup(false);
      setEditingUserEmail(null);
    } catch (error) {
      setError('Failed to update user');
      console.error('Error updating user:', error);
    }
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({
      ...newUserData,
      [name]: value,
    });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/addUser', newUserData);
      setUsersList([...usersList, response.data]);
      setNewUserData({
        username: '',
        email: '',
        password: '',
        phone: '',
        address: '',
      });
      setShowAddUserPopup(false);
    } catch (error) {
      setError('Failed to add user');
      console.error('Error adding user:', error);
    }
  };

  const handleRemoveClick = (email) => {
    setUserToDelete(email);
    setShowConfirmDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:9001/delete/${userToDelete}`);
      setUsersList(usersList.filter(user => user.email !== userToDelete));
      setShowConfirmDeleteModal(false);
      setUserToDelete(null);
    } catch (error) {
      setError('Failed to remove user');
      console.error('Error removing user:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDeleteModal(false);
    setUserToDelete(null);
  };

  return (
    <div className="dash-users-container">
      <h2 className="dash-users-title">User Management</h2>
      {error && <p className="error-message">{error}</p>}
      <button className="show-add-user-button" onClick={() => setShowAddUserPopup(true)}>Add User</button>
      <div className="dash-users-table-container">
        <table className="dash-users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map(user => (
              <tr key={user.email}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <button className="dash-users-remove-button" onClick={() => handleRemoveClick(user.email)}>Remove</button>
                  <button className="dash-users-edit-button" onClick={() => handleEditClick(user.email)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAddUserPopup && (
        <div className="add-user-popup">
          <div className="add-user-popup-content">
            <span className="close-popup" onClick={() => setShowAddUserPopup(false)}>&times;</span>
            <h3>Add New User</h3>
            <form className="add-user-form" onSubmit={handleAddUser}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newUserData.username}
                onChange={handleNewUserInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUserData.email}
                onChange={handleNewUserInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={newUserData.password}
                onChange={handleNewUserInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={newUserData.phone}
                onChange={handleNewUserInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={newUserData.address}
                onChange={handleNewUserInputChange}
              />
              <button type="submit">Add User</button>
            </form>
          </div>
        </div>
      )}
      {showEditUserPopup && (
        <div className="edit-user-popup">
          <div className="edit-user-popup-content">
            <span className="close-popup" onClick={() => setShowEditUserPopup(false)}>&times;</span>
            <h3>Edit User</h3>
            <form className="edit-user-form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={updatedUserData.username || ''}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={updatedUserData.email || ''}
                disabled
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={updatedUserData.password || ''}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={updatedUserData.phone || ''}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={updatedUserData.address || ''}
                onChange={handleInputChange}
              />
              <button type="button" onClick={handleSaveClick}>Save</button>
            </form>
          </div>
        </div>
      )}
      {showConfirmDeleteModal && (
        <div className="confirm-delete-popup">
          <div className="confirm-delete-popup-content">
            <span className="close-popup" onClick={handleCancelDelete}>&times;</span>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this user?</p>
            <button onClick={handleConfirmDelete}>Yes, Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
