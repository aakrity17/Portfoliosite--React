import homeMain from '../../Images/home-main.png';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import './home.css';

import React from 'react'

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="greeting">
                    <h1>
                        Namaste! <br />
                    </h1>
                    <img alt='I am Aakrity Chapagain' style={{
                        width: '40rem',
                    }} src="https://readme-typing-svg.herokuapp.com?color=03dac6&size=26&center=true&vCenter=true&width=900&lines=I+am+Aakrity+Chapagain!" />
                    <span className="description">Technology enthusiast and a learner</span>
                </div>
                <img src={homeMain} alt="Home Main" className="home-main" />
                <div className="social-icons">
                    <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/your_github_username" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
}

