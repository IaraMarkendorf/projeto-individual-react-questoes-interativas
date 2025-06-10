import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Questao1 from "./pages/Questao1";
import Questao2 from "./pages/Questao2";
import Questao3 from "./pages/Questao3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questao01" element={<Questao1 />} />
        <Route path="/questao02" element={<Questao2 />} />
        <Route path="/questao03" element={<Questao3 />} />
      </Routes>
    </Router>
  );
}
export default App;
