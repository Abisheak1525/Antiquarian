import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Home/context/UserContext';

export default function AdminLogin({ onClose, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser(); // Access setUser from context
    const navigate = useNavigate(); // For programmatic navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ name: email }); // You can replace this with actual login logic
        navigate('/dash'); // Redirect to dashboard
    };

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="text">Admin Login</div>
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
                        Not working? mail to <a>Admin</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
