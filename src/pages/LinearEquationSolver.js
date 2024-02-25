import React, { useState } from 'react';
import Header from '../components/Header';
import './LinearEquationSolver.css';

function LinearEquationSolver() {
    const [a1, setA1] = useState('');
    const [b1, setB1] = useState('');
    const [c1, setC1] = useState('');
    const [a2, setA2] = useState('');
    const [b2, setB2] = useState('');
    const [c2, setC2] = useState('');
    const [solution, setSolution] = useState({ x: '', y: '' });

    const solveEquations = () => {
        const newb = b1 * a2 - b2 * a1;
        const newc = c1 * a2 - c2 * a1;
        const y = newc / newb;
        const x = (c1 * a2 - b1 * a2 * y) / (a1 * a2);
        setSolution({ x, y });
    };

    return (
        <>
            <Header /> {/* Add Header component */}
            <div className="linear-equation-solver">
                <h2>Linear Equation Solver</h2>
                <div className="description">
                    <p>a1 * x + b1 * y = c1</p>
                    <p>a2 * x + b2 * y = c2</p>
                </div>
                <div className="input-group">
                    <label>a1:</label>
                    <input type="number" value={a1} onChange={(e) => setA1(parseInt(e.target.value))} />
                </div>
                <div className="input-group">
                    <label>b1:</label>
                    <input type="number" value={b1} onChange={(e) => setB1(parseInt(e.target.value))} />
                </div>
                <div className="input-group">
                    <label>c1:</label>
                    <input type="number" value={c1} onChange={(e) => setC1(parseInt(e.target.value))} />
                </div>
                <div className="input-group">
                    <label>a2:</label>
                    <input type="number" value={a2} onChange={(e) => setA2(parseInt(e.target.value))} />
                </div>
                <div className="input-group">
                    <label>b2:</label>
                    <input type="number" value={b2} onChange={(e) => setB2(parseInt(e.target.value))} />
                </div>
                <div className="input-group">
                    <label>c2:</label>
                    <input type="number" value={c2} onChange={(e) => setC2(parseInt(e.target.value))} />
                </div>
                <div className="button-container">
                    <button onClick={solveEquations}>Solve</button>
                </div>
                <div className="solution">
                    <h3>Solution:</h3>
                    <p>x = {solution.x}</p>
                    <p>y = {solution.y}</p>
                </div>
            </div>
        </>
    );
}

export default LinearEquationSolver;
