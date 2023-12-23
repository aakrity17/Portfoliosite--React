import React from 'react'
import './navbar.css'
import "../Images/logo192.png"

function Navbar() {
    return (
        <div>
            <div className="logo-container">
                <img src={require('../Images/logo192.png')} alt="Logo" className="logo" />
            </div>
            <ul>

                <li><a href="#">Home</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
        </div>

    )
}
export default Navbar;
