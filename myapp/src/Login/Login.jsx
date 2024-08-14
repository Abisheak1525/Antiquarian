import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Home/context/UserContext';
import AdminLogin from './AdminLogin'; 
import axios from 'axios';
import login from './login.png';


export default function Login({ onClose, onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useUser();
    const navigate = useNavigate(); 
    const [isAdminLogin, setIsAdminLogin] = useState(false); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9001/login', { email, password });
            if (response.data) {
                setUser(response.data); 
                navigate('/home');
                onClose(); 
            } else {
                alert('Invalid login details');
            }
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed');
        }
    };

    const handleAdminLogin = () => {
        setIsAdminLogin(true);
    };

    if (isAdminLogin) {
        return <AdminLogin onClose={onClose} onRegister={onRegister} />;
    }

    return (
        <div className="login-modal">
            <div className="login-modal-content">
                <div className="login-model-image">
                    <img src={login} alt="welcome" className="login-image-left" />
                </div>
                <div className="form-container">
                    <div className="text">Welcome Back</div>
                    <form onSubmit={handleSubmit}>
                        <span className="close-btn" onClick={onClose}>&times;</span>
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
                            Not a member? <a href="#" onClick={onRegister}>New Account</a> or <a href="#" onClick={handleAdminLogin}>Admin</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );    
}
