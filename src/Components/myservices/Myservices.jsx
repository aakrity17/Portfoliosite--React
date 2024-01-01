import React from 'react';
import './myservices.css';

const ServiceCard = ({ title, description, imageUrl }) => {
    return (
        <div className="service-card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title" style={{ color: 'white' }}>{title}</h3>
                <p className="card-description" style={{ color: 'white' }}>{description}</p>
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
                    imageUrl="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1152844/Responsive_Design-1200x628-cf29128a0de1b39f50f54b703e491b7a-d1539e7beb483b5f54cb20c84f6ed2f4.png"
                />
                <ServiceCard
                    title="WordPress Development"
                    description="Expertise in developing and customizing WordPress websites for various purposes."
                    imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/800px-WordPress_blue_logo.svg.png"
                />
                <ServiceCard
                    title="Frontend Development"
                    description="Crafting modern and interactive user interfaces using cutting-edge frontend technologies."
                    imageUrl="https://solidstudio.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Flofvu8al%2Fproduction%2F39d6cef5649ed5c35b1420198a362baf1bff97a6-1280x939.jpg&w=1080&q=75"
                />
                <ServiceCard
                    title="Video Editing"
                    description="Proficient in video editing techniques to deliver visually compelling content."
                    imageUrl="https://i.pcmag.com/imagery/roundups/01b4GWdIDy2hlLfEmihhSbv-1..v1678307759.jpg"
                />
                {/* Add more service cards as needed */}
            </div>
        </div>
    );
};

export default Myservices;
