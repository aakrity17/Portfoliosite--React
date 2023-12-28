import React, { useState } from 'react';
import './contact.css'; // Import your CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-wrapper">
                    <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Full name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Email address"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit" className="form-btn" disabled={!formData.fullname || !formData.email || !formData.message}>
                    <span>Send Message</span>
                </button>
            </form>
        </div>
    );
};

export default Contact;
