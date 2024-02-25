import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import LinearEquationSolver from './pages/LinearEquationSolver.js'
import QuadraticEquationSolver from "./pages/QuadraticEquationSolver"
import NoPage from "./pages/NoPage"


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/LinearEquationSolver" element={<LinearEquationSolver />} />
          <Route path="/QuadraticEquationSolver" element={<QuadraticEquationSolver />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}