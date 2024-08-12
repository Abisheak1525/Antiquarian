import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLanding from './Landing/MainLanding';
import Home from './Home/Home';
import Auction from './Auction/Auction';
import OwnScript from './OwnScript/OwnScript';
import Gallary from './Gallary/Gallary';
import { CartProvider } from './Cart/CartContext';
import Cart from './Cart/Cart';
import Dashboard from './Dashboard/Dashboard';
import Profile from './User/Profile';
import AddBook from './User/AddBook';
import Sidebar from './Dashboard/Sidebar'; 
import Users from './Dashboard/Users/Users';
import Books from './Dashboard/Books/Books';
import DashAuction from './Dashboard/Auction/DashAuction';
import Order from './Dashboard/Orders/Order';
import AboutUs from './Home/AboutUs/AboutUs';
import MainAuction from './Auction/MainAuction';
import Payment from './Payment/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLanding/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/auction" element={<MainAuction/>} />
          <Route path="/dash/*" element={(
            <div style={{ display: 'flex' }}>
              <Sidebar /> 
              <div style={{ marginLeft: '200px', padding: '20px' }}>
                <Routes>
                  <Route path="/" element={<Dashboard />} /> 
                  <Route path="/users" element={<Users/>} /> 
                  <Route path="/books" element={<Books/>} /> 
                  <Route path="/auct" element={<DashAuction/>} /> 
                  <Route path="/order" element={<Order/>} /> 
                </Routes>
              </div>
            </div>
          )} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/own" element={<OwnScript/>} />
          <Route path="/gallary" element={<Gallary/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
