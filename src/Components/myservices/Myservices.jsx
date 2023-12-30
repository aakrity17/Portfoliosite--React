import React from 'react';
import './myservices.css';
import '../../Images/about.png'

const Myservices = () => {
    return (
        <section className="service">
            <h3 className="h3 service-title">What I'm Doing</h3>
            <ul className="service-list">
                <ServiceItem
                    iconSrc="../../Images/about.png'
"
                    altText="design icon"
                    title="Web design"
                    text="The most modern and high-quality design made at a professional level."
                />
                <ServiceItem
                    iconSrc="./assets/images/icon-dev.svg"
                    altText="Web development icon"
                    title="Web development"
                    text="High-quality development of sites at the professional level."
                />
                <ServiceItem
                    iconSrc="./assets/images/icon-app.svg"
                    altText="mobile app icon"
                    title="Mobile apps"
                    text="Professional development of applications for iOS and Android."
                />
                <ServiceItem
                    iconSrc="./assets/images/icon-photo.svg"
                    altText="camera icon"
                    title="Photography"
                    text="I make high-quality photos of any category at a professional level."
                />
            </ul>
        </section>
    );
};

const ServiceItem = ({ iconSrc, altText, title, text }) => {
    return (
        <li className="service-item">
            <div className="service-icon-box">
                <img src={iconSrc} alt={altText} width="40" />
            </div>
            <div className="service-content-box">
                <h4 className="h4 service-item-title">{title}</h4>
                <p className="service-item-text">{text}</p>
            </div>
        </li>
    );
};

export default Myservices;
