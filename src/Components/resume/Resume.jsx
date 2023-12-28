import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './resume.css';

export default function Resume() {
    return (
        <>
            <h1 style={{
                textAlign: "center",
                marginTop: "2rem",
                color: "#ddd",
            }}>
                Find My Resume!!! <br />
            </h1>
            <div className="resume-container" style={{
                marginTop: "2rem"
            }}>
               

                <header>
                    <h1>Akriti Chapagain</h1>
                    <p>Web Developer | QA</p>
                </header>

                <section className="contact-section">
                    <h2>Contact</h2>
                    <div className="contact-icons">
                        <p><FaEnvelope /> aakritycpg@gmail.com</p>
                        <p><FaPhone /> 9864422444</p>
                        <p><FaLinkedin /> linkedin.com/in/aakrity17</p>
                        <p><FaGithub /> github.com/aakrity17</p>
                    </div>
                </section>

                <section className="education-section">
                    <h2>Education</h2>
                    <p>
                        <strong>Bachelor in Computer Application</strong>
                        <br />
                        La grandee International College
                        <br />
                        Graduation Year: 2024
                    </p>
                </section>

                <section className="experience-section">
                    <h2>Experience</h2>
                    <p>
                        <strong>Frontend development intern </strong>
                        <br />
                        Xdezo
                        <br />
                        October 2023 - Present
                        <br />
                        Responsibilities: As a frontend developer I was assigned and task
                    </p>
                </section>

                <section className="skills-section">
                    <h2>Skills</h2>
                    <ul>
                        <li>JavaScript (React)</li>
                        <li>HTML5, CSS3</li>
                        <li>Git, GitHub</li>
                        <li>Responsive Web Design</li>
                    </ul>
                </section>
            </div>
        </>

    );
}
