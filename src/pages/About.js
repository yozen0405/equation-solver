import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import './About.css';

const About = () => {
    const handleGitHubClick = () => {
        window.open('https://github.com/yozen0405/equation-solver', '_blank');
    };

    return (
        <div className="about-page">
            <Header />
            <div className="content">
                <h2>About The Website</h2>
                <button className="github-button" onClick={handleGitHubClick}>
                    <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.5em' }} /> View GitHub Repo
                </button>
            </div>
        </div>
    );
}

export default About;
