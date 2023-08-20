import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mission1 from "./components/Mission1";
import Mission2 from "./components/Mission2";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/mission-1" element={<Mission1 />} />
        <Route path="/mission-2" element={<Mission2 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
