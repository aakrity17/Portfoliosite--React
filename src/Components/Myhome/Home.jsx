import homeMain from '../../Images/home-main.png';
import Blogs from '../blogs/Blogs';
// import Resume from '../resume/Resume';
import './home.css';

import React from 'react'

export default function Home() {
    return (
        <>
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
                </div>
            </div>
            {/* <Resume /> */}
            <Blogs />
        </>

    );
}

