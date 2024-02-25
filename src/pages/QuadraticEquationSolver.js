import Header from "../components/Header";
import React, { useState } from 'react';
import './LinearEquationSolver.css';

function QuadraticEquationSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState({ x1: '', x2: '' });

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult({ x1, x2 });
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setResult({ x, x });
    } else {
      setResult('No real roots');
    }
  };

  return (
    <>
      <Header />
      <div className="linear-equation-solver">
        <h2>Quadratic Equation Solver</h2>
        <div className="description">
          <span>a</span>
          <sup>2</sup>
          <span>x</span>
          <span> + </span>
          <span>b</span>
          <span>x</span>
          <span> + </span>
          <span>c</span>
          <span> = </span>
          <span>0</span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>a:</label>
            <input type="number" value={a} onChange={(e) => handleInputChange(e, setA)} />
          </div>
          <div className="input-group">
            <label>b:</label>
            <input type="number" value={b} onChange={(e) => handleInputChange(e, setB)} />
          </div>
          <div className="input-group">
            <label>c:</label>
            <input type="number" value={c} onChange={(e) => handleInputChange(e, setC)} />
          </div>
          <div className="button-container">
            <button type="submit">Calculate</button>
          </div>
        </form>
        {result && typeof result === 'object' ? (
          <div className="solution">
            <h3>Solution:</h3>
            <p>x1 = {result.x1}</p>
            <p>x2 = {result.x2}</p>
          </div>
        ) : (
          <div className="solution">
            <h3>Solution:</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default QuadraticEquationSolver;
