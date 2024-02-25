import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <div className="content">
                <h2>About Sir Isaac Newton</h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/250px-GodfreyKneller-IsaacNewton-1689.jpg" alt="Sir Isaac Newton" className="image" />
                <p>Sir Isaac Newton (1643–1727) was an English mathematician, physicist, astronomer, and author who is widely recognised as one of the most influential scientists of all time and as a key figure in the scientific revolution.</p>
                <p>His book <i>Philosophiæ Naturalis Principia Mathematica</i>, first published in 1687, laid the foundations of classical mechanics and is considered one of the most important scientific works ever written.</p>
                <p>Newton made groundbreaking contributions to optics, mathematics (especially calculus), and celestial mechanics. He formulated the laws of motion and universal gravitation, which dominated scientists' view of the physical universe for the next three centuries.</p>
                <p>Newton's work provided the Enlightenment-era mathematicians and philosophers with a coherent model of the physical universe, allowing them to develop a mechanistic view of nature.</p>
                <p>Newton's discoveries and theories laid the groundwork for many scientific advances that followed, making him one of the most influential scientists in history.</p>
                <p>To learn more about Sir Isaac Newton, you can explore various biographies, documentaries, and academic publications dedicated to his life and work.</p>
            </div>
        </div>
    );
}

export default About;
