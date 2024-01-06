import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../Images/logo.png';

const Navbar = () => {
    const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleAboutDropdown = () => {
        setAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
                <li><Link to="/">Home</Link></li>
                {/* About with dropdown */}
                <li className={isAboutDropdownOpen ? 'dropdown-open' : ''} onClick={toggleAboutDropdown}>
                    <span>About</span>
                    {isAboutDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link to="/myservices">Myservices</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
