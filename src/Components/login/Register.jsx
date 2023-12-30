// RegistrationForm.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

        const emailExists = storedUsers.some((user) => user.email === formData.email);

        if (emailExists) {
            setError('Email already exists. Please use a different email.');
        } else {
            // Save user data to local storage
            const newUser = {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            };

            const updatedUsers = [...storedUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Clear form data and display success message
            setFormData({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

            setError('');
            alert('Registration successful! Please proceed to login.');
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
};

export default Register;
