import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>

                {/* About with dropdown */}
                <li className={isAboutDropdownOpen ? 'dropdown-open' : ''} onClick={toggleAboutDropdown}>
                    <span>About</span>
                    {isAboutDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/myServices">MyServices</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>
                    )}
                </li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
