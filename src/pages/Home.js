import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import linearIcon from './assets/linear-icon.png';
import aboutIcon from './assets/about-icon.png';
import './Home.css';

const Block = ({ to, icon, name }) => {
    return (
        <div className="block">
            <Link to={to}>
                <img src={icon} alt={name} className="block-icon" />
                <span className="block-name">{name}</span>
            </Link>
        </div>
    );
}

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-page">
                <div className="blocks">
                    <Block to="/about" icon={aboutIcon} name="About" />
                    <Block to="/LinearEquationSolver" icon={linearIcon} name="Linear Equation Solver" /> {/* Use the imported image */}
                    <Block to="/QuadraticEquationSolver" icon={linearIcon} name="Quadratic Equation Solver" />
                </div>
            </div>
        </>
    );
}

export default Home;
