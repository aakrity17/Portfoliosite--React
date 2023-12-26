import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul className="nav-list">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/">Projects</Link></li>
                <li><Link to="/">Blogs</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
