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
    const [xFup, setXfup] = useState('');
    const [xFdn, setXfdn] = useState('');
    const [yFup, setYfup] = useState('');
    const [yFdn, setYfdn] = useState('');
    const [solution, setSolution] = useState({ x: '', y: '' });

    const findBiggestGcdForPairs = (a, b) => {
        const newA = Math.abs(a);
        const newB = Math.abs(b);
        let biggestGcd = 1;
        for (let i = 2; i <= newA && i <= newB; i++) {
            if ((newA % i === 0) && (newB % i === 0)) {
                biggestGcd = Math.max(biggestGcd, i);
            }
        }
        a /= biggestGcd;
        b /= biggestGcd;
        if (b < 0) {
            a *= -1;
            b *= -1;
        }
        return [a, b];
    }; 

    const solveEquations = () => {
        const newYfub = c1 * a2 - c2 * a1;
        const newYfup = b1 * a2 - b2 * a1;
        const newXfub = c2 * b1 - c1 * b2;
        const newXfup = a2 * b1 - a1 * b2;
        const y = newYfub / newYfup;
        const x = newXfub / newXfup;
        setSolution({ x, y });
        const [xfup, xfdn] = findBiggestGcdForPairs(newXfub, newXfup);
        setXfup(xfup);
        setXfdn(xfdn);
        const [yfup, yfdn] = findBiggestGcdForPairs(newYfub, newYfup);
        setYfup(yfup);
        setYfdn(yfdn);
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };    

    const renderFraction = (fup, fdn) => {
        if (fup === '') return null;
        if (fdn === 1) {
            return <p style={{ display: 'inline-block' }}>{fup}</p>;
        } else if (fdn === 0) {
            return "NaN";
        }
        return (
            <div className="fraction">
                <span className="fup">{fup}</span>
                <span className="fdn">{fdn}</span>
            </div>
        );
    };

    return (
        <>
            <Header />
            <div className="linear-equation-solver">
                <h2>Linear Equation Solver</h2>
                <div className="description">
                    <p>a1 * x + b1 * y = c1</p>
                    <p>a2 * x + b2 * y = c2</p>
                </div>
                <div className="input-group">
                    <label>a1:</label>
                    <input type="text" value={a1} onChange={(e) => handleInputChange(e, setA1)} />
                </div>
                <div className="input-group">
                    <label>b1:</label>
                    <input type="text" value={b1} onChange={(e) => handleInputChange(e, setB1)} />
                </div>
                <div className="input-group">
                    <label>c1:</label>
                    <input type="text" value={c1} onChange={(e) => handleInputChange(e, setC1)} />
                </div>
                <div className="input-group">
                    <label>a2:</label>
                    <input type="text" value={a2} onChange={(e) => handleInputChange(e, setA2)} />
                </div>
                <div className="input-group">
                    <label>b2:</label>
                    <input type="text" value={b2} onChange={(e) => handleInputChange(e, setB2)} />
                </div>
                <div className="input-group">
                    <label>c2:</label>
                    <input type="text" value={c2} onChange={(e) => handleInputChange(e, setC2)} />
                </div>
                <div className="button-container">
                    <button onClick={solveEquations}>Solve</button>
                </div>
                <div className="solution">
                    <h3>Solution:</h3>
                    <p>x = {solution.x}</p>
                    <p>y = {solution.y}</p>
                </div>
                <div className="solution">
                    <h3>Intermediate Values:</h3>
                    <div style={{ display: 'inline-block' }}>
                      <p>&nbsp;x =&nbsp;</p>
                    </div>
                    {renderFraction(xFup, xFdn)}
                    <div style={{ display: 'inline-block' }}>
                      <p>, y =&nbsp;</p>
                    </div>
                    {renderFraction(yFup, yFdn)}
                </div>
            </div>
        </>
    );
}

export default LinearEquationSolver;
