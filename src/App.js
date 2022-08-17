import "./App.css";
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import DamagedCalculator from "./pages/damage-calculator/damageCalculator";
import About from "./pages/about/about";
import Footer from "./pages/footer/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Damage-calculator" element={<DamagedCalculator />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
