import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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

        const user = storedUsers.find((u) => u.email === formData.email && u.password === formData.password);

        if (user) {
            // Clear form data and display success message
            setFormData({
                email: '',
                password: '',
            });

            setError('');
            alert('Login successful!'); // You may want to redirect instead of using an alert
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register</Link>
            </p>
            {/* <Link to="/home">Go to Main Page</Link> */}

        </div>
    );
};

export default Login;
