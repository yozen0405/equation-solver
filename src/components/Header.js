import React, { useState } from "react";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Equation Solver
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Home">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/LinearEquationSolver">Linear Equation Solver</NavLink>
        </li>
        <li>
          <NavLink to="/QuadraticEquationSolver">Quadratic Equation Solver</NavLink>
        </li>
        <br></br>
      </ul>
    </nav>
  );
}

export default Header;
