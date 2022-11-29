import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="link" to="/ReactWithVite">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/ReactWithVite/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/ReactWithVite" element={<Home />} />
        <Route path="/ReactWithVite/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
