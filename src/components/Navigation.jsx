import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <a href="/#about" style={{ textDecoration: "none", color: "white" }}>
        <div className="nav-item">About</div>
      </a>

      <a href="/#skills" style={{ textDecoration: "none", color: "white" }}>
        <div className="nav-item">Skills</div>
      </a>
    </div>
  );
};

export default Navigation;
