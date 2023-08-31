import React from "react";

const About = () => {
  return (
    <div style={{ backgroundImage: "url('./doodle.png')", height: "100vh" }}>
      <div
        style={{
          color: "white",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "60vw", textAlign:"center" , height:"100vh"}}>
          <h1>About Me</h1>

          <p>
            Artificial intelligence (AI), sometimes called machine intelligence,
            is intelligence demonstrated by machines, unlike the natural
            intelligence displayed by humans and animals. Leading AI textbooks
            define the field as the study of "intelligent agents": any device
            that perceives its environment and takes actions that maximize its
            chance of successfully achieving its goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
