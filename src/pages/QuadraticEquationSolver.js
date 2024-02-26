import Header from "../components/Header";
import React, { useState, useEffect } from 'react';
import './LinearEquationSolver.css';

function QuadraticEquationSolver() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState({ x1: '', x2: '' });
  const [twoA, setTwoA] = useState('');
  const [negativeB, setNegativeB] = useState('');
  const [Discriminant, setDiscriminant] = useState('');
  const [sqrtDiscriminant, setSqrtDiscriminant] = useState('');
  const [positiveFactor0, setPositiveFactor0] = useState('');
  const [positiveFactor1, setPositiveFactor1] = useState('');
  const [negativeFactor0, setNegativeFactor0] = useState('');
  const [negativeFactor1, setNegativeFactor1] = useState('');
  const [tmp, setTmp] = useState('');
  const [tmp2, setTmp2] = useState('');

  const findBiggestFactor = (num) => {
    let biggestFactor = 1;
    for (let i = 2; i * i <= num; i++) {
      if (num % (i * i) === 0) {
        biggestFactor = Math.max(biggestFactor, i);
      }
    }
    return [biggestFactor, num / (biggestFactor * biggestFactor)];
  };

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
    return [a, b];
  }; 

  const findBiggestGcd = (a, b, c) => {
    const newA = Math.abs(a);
    const newB = Math.abs(b);
    const newC = Math.abs(c);
    let biggestGcd = 1;
    for (let i = 2; i <= newA && i <= newB && i <= newC; i++) {
      if ((newA % i === 0) && (newB % i === 0) && (newC % i === 0)) {
        biggestGcd = Math.max(biggestGcd, i);
      }
    }
    a /= biggestGcd;
    b /= biggestGcd;
    c /= biggestGcd;
    return [a, b, c];
  };

  const solveLinearEquation = () => {
    setTwoA(b);
    setNegativeB(-c);
    setDiscriminant(0);
    setSqrtDiscriminant(0);
    const x = - c / b;
    setResult({ x1: x, x2: '' });
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const discriminant = b * b - 4 * a * c;
    const numB = (a < 0) ? -parseInt(b) : parseInt(b);
    const numC = (a < 0) ? -parseInt(c) : parseInt(c);
    const numA = (a < 0) ? -parseInt(a) : parseInt(a);

    if (numA === 0) {
      solveLinearEquation();
      return;
    }

    if (discriminant > 0) {
      const x1 = (-numB + Math.sqrt(discriminant)) / (2 * numA);
      const x2 = (-numB - Math.sqrt(discriminant)) / (2 * numA);
      setResult({ x1, x2 });
    } else if (discriminant === 0) {
      const x = -numB / (2 * numA);
      setResult({ x });
    } else {
      setResult('No real roots');
      return;
    }
    const [outD, sqrtD] = findBiggestFactor(discriminant);
    const [twoTimesA, negativeBVal, newoutD] = findBiggestGcd(2 * numA, -numB, outD);

    const [newp0, newp1] = findBiggestGcdForPairs(negativeBVal + newoutD, twoTimesA);
    setPositiveFactor0(newp0);
    setPositiveFactor1(newp1);
    const [newn0, newn1] = findBiggestGcdForPairs(negativeBVal - newoutD, twoTimesA);
    setNegativeFactor0(newn0);
    setNegativeFactor1(newn1);

    setTwoA(twoTimesA);
    setNegativeB(negativeBVal);
    setDiscriminant(newoutD);
    setSqrtDiscriminant(sqrtD);
    if (parseInt(sqrtD) === 0 || parseInt(newoutD) === 0) {
      setSqrtDiscriminant(0);
      setDiscriminant(0);
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
            {result.x2 ? (
              <p>x1 = {result.x1},  x2 = {result.x2}</p>
            ) : (
              <p>x = {result.x1}</p>
            )}
          </div>
        ) : (
          <div className="solution">
            <h3>Solution:</h3>
            <p>{result}</p>
          </div>
        )}
        {result && typeof result === 'object' ? (
          <div className="intermediate-values">
            <h3>Intermediate Values:</h3>
            <p>Solution: &nbsp;
              {sqrtDiscriminant === 1 ? (
                <span>
                <div style={{ display: 'inline-block' }}>
                  {positiveFactor1 === 1 || positiveFactor1 === 0 ?
                    <p>{positiveFactor0}</p> : (
                      <div class="fraction">
                        <span class="fup">
                          {positiveFactor0}
                        </span>
                        <span class="fdn">
                          {positiveFactor1}
                        </span>
                      </div>
                  )}
                </div>
                <div style={{ display: 'inline-block' }}>
                  <p>,</p>
                </div>
                <div style={{ display: 'inline-block' }}>
                  {negativeFactor1 === 1 || negativeFactor1 === 0 ?
                    <p>{negativeFactor0}</p> : (
                      <div class="fraction">
                        <span class="fup">
                          {negativeFactor0}
                        </span>
                        <span class="fdn">
                          {negativeFactor1}
                        </span>
                      </div>
                  )}
                </div>
              </span>              
              ) : (
                <div class="fraction">
                  {Discriminant !== 0 && sqrtDiscriminant !== 0 ? (
                    <span class="fup">
                      {negativeB === 0 ?
                        null :
                        <span>{negativeB}</span>
                      }
                      &nbsp;±&nbsp;
                      {Discriminant === 1 ?
                        null :
                        <span>{Discriminant}</span>
                      }
                      {sqrtDiscriminant === 1 ?
                        null : (
                          <div className="sqrt">
                            &radic;
                            <span className="overline">
                              &nbsp;{sqrtDiscriminant}&nbsp;
                            </span>
                          </div>
                        )}
                    </span>
                  ) : (
                    <span class="fup">
                      {negativeB}
                    </span>
                  )}
                  {parseInt(twoA) !== 1 ?
                    <span className="bar">/</span> : null
                  }
                  {parseInt(twoA) !== 1 ?
                    <span className="fdn">{twoA}</span> : null
                  }
                </div>
              )}
            </p>
          </div>) : null
        }
      </div>
    </>
  );
}

export default QuadraticEquationSolver;
