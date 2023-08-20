import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="nav-link">
      <Link to="/mission-1">mission 1</Link>

      <Link to="/mission-2">mission 2</Link>
    </nav>
  );
};

export default Home;
