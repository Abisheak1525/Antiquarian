import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Home/context/UserContext';
import axios from 'axios';
import adminLoginImage from './log.png';

export default function AdminLogin({ onClose, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser(); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9001/adminlog', { email, password });
            setUser({ name: response.data.username }); 
            navigate('/dash');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Invalid login details');
        }
    };

    const handleUserLoginClick = () => {
        onClose();  
        onRegister();
    };

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <div className="login-model-image">
                    <img src={adminLoginImage} alt="Admin Login" className="login-image-left"/>
                </div>
                <div className="form-container">
                    <div className="text">Admin Login</div>
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <form onSubmit={handleSubmit}>
                        <div className="data">
                            <label>Email</label>
                            <input 
                              type="text" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)} 
                              required 
                            />
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input 
                              type="password" 
                              value={password} 
                              onChange={(e) => setPassword(e.target.value)} 
                              required 
                            />
                        </div>
                        <div className="forgot-pass">
                            <a href="mailto:abisheaksakthivelmurugan@example.com">Forgot Password?</a>
                        </div>
                        <div className="btn">
                            <button type="submit">Login</button>
                        </div>
                        <div className="signup-link">
                            Not an Admin? Create <a href="#" onClick={handleUserLoginClick}>User Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
