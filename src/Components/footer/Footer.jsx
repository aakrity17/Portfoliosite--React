import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

import React from 'react'

const Footer = () => {
  return (
      <div className="social-icons" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem"
      }}>
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
  )
}

export default Footer