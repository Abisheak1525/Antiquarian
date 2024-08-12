import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register({ onClose, onLogin }) {
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        repassword: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9001/addUser', formData);
            console.log('User registered:', response.data);
            alert('Registration successful');
            navigate("/home");
        } catch (error) {
            console.error('There was an error registering the user!', error);
            alert('Registration failed');
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="rg-login-modal">
            <div className="rg-login-modal-content">
                <span className="rg-close-btn" onClick={onClose}>&times;</span>
                <div className="rg-text">New Account</div>
                <form onSubmit={handleSubmit}>
                    <div className="rg-data">
                        <label>UserName:</label>
                        <input type="text" required name="username" value={formData.username} onChange={handleChange} />
                    </div>
                    <div className="rg-data">
                        <label>Email:</label>
                        <input type="email" required name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="rg-data">
                        <label>Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="rg-data">
                        <label>Re-Type Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            required
                            name="repassword"
                            value={formData.repassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="rg-checker-password">
                        <input
                            type="checkbox"
                            id="showPassword"
                            onChange={togglePasswordVisibility}
                        />
                        <label className="show-pass" htmlFor="showPassword"> Show Password</label>
                    </div><br />
                    <div className="rg-checker">
                        <input type="checkbox" id="terms" required />
                        <label htmlFor="terms">
                            <a href="#" className="terms">I agree to the terms and conditions</a>
                        </label>
                    </div>
                    <div className="rg-btn">
                    <button type="submit" >Create Account</button>
                    </div>
                    <div className="rg-signup-link">
                        Already a member? <a href="#" onClick={onLogin}>Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}