import React, { useEffect, useState } from "react";
import "../styles/landing.css";

const TypewriterText = ({ text, isVisible }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Delay between characters

      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, text]);

  return <div className="terminal-text"> &gt; {displayText}</div>;
};

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay between sentences

    return () => clearTimeout(visibilityTimeout);
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <div style={{ marginLeft: "3rem" }}>
        <TypewriterText text="Loading..." isVisible={isVisible} />
        <img style={{ marginTop: "1rem" }} src="./will.png" alt="" />
        <TypewriterText text="Hi, I’m Tomas Kahn." isVisible={isVisible} />
        <TypewriterText text="I’m a Software Development Engineer based in Argentina." isVisible={isVisible} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="btn-pink">Build Page</button>
      </div>
      <div className="terminal-text" style={{ marginLeft: "3rem" }}>
        &gt; ...............(100%)
      </div>
    </div>
  );
};

export default Landing;
