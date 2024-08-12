import React, { useState } from 'react';
import './Nav.css';
import likeIcon from './mainlogo.png';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function Nav() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const toggleLoginModal = () => {
        setShowLogin(!showLogin);
        if (showRegister) setShowRegister(false);
    };

    const toggleRegisterModal = () => {
        setShowRegister(!showRegister);
        if (showLogin) setShowLogin(false);
    };

    return (
        <div className='ng-al'>
            <div className="navbar">
                <div className="left">
                    <div>
                        <img src={likeIcon} alt="Like Icon" className="like-icon" />
                    </div>
                </div>
                <div className="right">
                    <ul className="nv-ul">
                        <li className="nv-li"><a href="#home">Home</a></li>
                        <li className="nv-li"><a href="#global">Global</a></li>
                        <li className="nv-li"><a href="#auction">Auction</a></li>
                        <li className="nv-li"><a href="#" onClick={toggleRegisterModal}>Register</a></li>
                        <li className="nv-li"><a href="#" onClick={toggleLoginModal}>Login</a></li>
                    </ul>
                </div>
                <div className="nv-sch">
                    <input type="search" className="nv-srch" name=" " placeholder="search" onClick={toggleLoginModal} />
                    <a href="#home"><button className="nv-btn" onClick={toggleLoginModal}>Search</button></a>
                </div>
            </div>
            {showLogin && <Login onClose={toggleLoginModal} onRegister={toggleRegisterModal} />}
            {showRegister && <Register onClose={toggleRegisterModal} onLogin={toggleLoginModal} />}
        </div>
    );
}
