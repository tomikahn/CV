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

      <a href="/#projects" style={{ textDecoration: "none", color: "white" }}>
        <div className="nav-item">Projects</div>
      </a>
      <a href="/#resume" style={{ textDecoration: "none", color: "white" }}>
        <div className="nav-item">Resume</div>
      </a>
    </div>
  );
};

export default Navigation;
