import React from 'react';
import './Order.css'; // Import the CSS file for the Orders page

// Sample data for orders
const ordersList = [
  { id: 1, customer: 'Abi',book:'GOT', orderDate: '2024-08-01', total: '250.00', status: '-' },
  { id: 2, customer: 'Admin',book:'Alice In BorderLand', orderDate: '2024-08-02', total: '150.00', status: '-' },
  { id: 3, customer: 'User',book:'Price Of Percia', orderDate: '2024-08-03', total: '300.00', status: '-' }
];

function Order() {
  return (
    <div className="dash-orders-container">
      <h2 className="dash-orders-title">Orders Management</h2>
      <table className="dash-orders-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Book</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ordersList.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.book}</td>
              <td>{order.orderDate}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <button className="dash-orders-view-button">View</button>
                <button className="dash-orders-cancel-button">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Order Details</h3>
      <div className="dash-orders-card-container">
        {ordersList.map(order => (
          <div className="dash-orders-card" key={order.id}>
            <h4 className="dash-orders-card-title">Order #{order.id}</h4>
            <p className="dash-orders-card-customer">Customer: {order.customer}</p>
            <p className="dash-orders-card-date">Date: {order.orderDate}</p>
            <p className="dash-orders-card-total">Total: {order.total}</p>
            <p className="dash-orders-card-status">Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
