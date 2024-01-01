import React from 'react';
import './myservices.css'; // Import your CSS file

const ServiceCard = ({ title, description, imageUrl }) => {
    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
};

const Myservices = () => {
    return (
        <div className="awesome-service-cards">
            <h2 className="section-title">Awesome Service Cards</h2>
            <div className="service-card-container">
                <ServiceCard
                    title="Fully Responsive Design"
                    description="Create stunning and fully responsive web designs for a seamless user experience."
                    imageUrl="https://via.placeholder.com/300"
                />
                <ServiceCard
                    title="WordPress Development"
                    description="Expertise in developing and customizing WordPress websites for various purposes."
                    imageUrl="https://via.placeholder.com/300"
                />
                <ServiceCard
                    title="Frontend Development"
                    description="Crafting modern and interactive user interfaces using cutting-edge frontend technologies."
                    imageUrl="https://via.placeholder.com/300"
                />
                <ServiceCard
                    title="Video Editing"
                    description="Proficient in video editing techniques to deliver visually compelling content."
                    imageUrl="https://via.placeholder.com/300"
                />
                {/* Add more service cards as needed */}
            </div>
        </div>
    );
};

export default Myservices;
