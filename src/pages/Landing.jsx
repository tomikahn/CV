import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer";
import resumePDF from "./cv-kahn-2023.pdf";

const TypewriterText = ({ text, isVisible }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 50); // Delay between characters

      return () => clearTimeout(timeout);
    }
  }, [isVisible, currentIndex, text]);

  return <div className="terminal-text"> {displayText}</div>;
};

const Landing = () => {
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHiVisible, setIsHiVisible] = useState(false);
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isChargingVisible, setIsChargingVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoadingVisible(true);
    }, 0); // Delay before showing Loading...

    const imageTimeout = setTimeout(() => {
      setIsImageVisible(true);
    }, 2000); // Delay before showing image

    const hiTimeout = setTimeout(() => {
      setIsHiVisible(true);
    }, 2500); // Delay before showing Hi...

    const introTimeout = setTimeout(() => {
      setIsIntroVisible(true);
    }, 4000); // Delay before showing intro text

    return () => {
      clearTimeout(loadingTimeout);
      clearTimeout(imageTimeout);
      clearTimeout(hiTimeout);
      clearTimeout(introTimeout);
    };
  }, []);

  // useEffect(() => {
  //   // Check if the current URL contains the hash for the 'about' section
  //   if (window.location.hash === "#about") {
  //     if (isAboutVisible) {
  //       // Scroll to the 'about' section smoothly
  //       window.scrollTo({
  //         top: document.getElementById("about").offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // }, [isAboutVisible]);

  const skillImages = [
    "./assets/html.png",
    "./assets/js.png",
    "./assets/css.png",
    "./assets/ts.png",
    "./assets/react.png",
    "./assets/git.png",
    "./assets/redux.png",
    "./assets/angular.png",
    "./assets/ai.png",
    "./assets/ae.png",
    "./assets/ps.png",
    "./assets/figma.png",
    "./assets/firebase.png",
    "./assets/postman.png",

    // Add paths for the rest of your skill images here
  ];

  const [aboutRef, aboutInView] = useInView();
  const [skillsRef, skillsInView] = useInView();

  return (
    <>
      <div
        style={{ height: "60vh", marginTop: "5rem" }}
        className="first-section"
      >
        <div style={{ marginLeft: "3rem" }}>
          <TypewriterText text="&gt; Loading..." isVisible={isLoadingVisible} />
          {isImageVisible && (
            <img style={{ marginTop: "1rem" }} src="./will.png" alt="" />
          )}
          <TypewriterText
            text="&gt; Hi, I’m Tomas Kahn."
            isVisible={isHiVisible}
          />
          <TypewriterText
            text="&gt; I’m a Software Development Engineer based in Argentina."
            isVisible={isIntroVisible}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.button
            className="btn-pink"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
            onClick={() => {
              setIsChargingVisible(true);
              const introTimeout = setTimeout(() => {
                setIsAboutVisible(true);
              }, 1300);
              navigate("/#about");
            }}
          >
            Click Here to Build Page
          </motion.button>
        </div>
        <div className="terminal-text" style={{ textAlign: "center" }}>
          <TypewriterText
            text="&gt; ..............(100%)"
            isVisible={isChargingVisible}
          />
        </div>
      </div>
      <div id="about" style={{ height: "60px" }}></div>

      {isAboutVisible && (
        <motion.div
          ref={aboutRef} // Attach the ref
          initial={{ opacity: 0 }} // Initial opacity is 0
          animate={{ opacity: isAboutVisible ? 1 : 0 }} // Animate opacity based on isAboutVisible
          transition={{ duration: 0.5 }} // Transition duration
          style={{
            backgroundImage: "url('./doodle.png')",
            height: "100vh",
            width: "98vw",
          }}
        >
          <div
            style={{
              color: "white",
              width: "99.1vw",
            }}
          >
            <div
              style={{
                width: "60vw",
                textAlign: "center",
                height: "100vh",
                // marginTop: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <h1
                style={{
                  marginTop: "-5rem",
                  fontSize: "5rem",
                  marginBottom: "0px",
                }}
                className="title"
              >
                About Me
              </h1>

              <p style={{ fontSize: "2rem" }} className="par">
                Artificial intelligence (AI), sometimes called machine
                intelligence, is intelligence demonstrated by machines, unlike
                the natural intelligence displayed by humans and animals.
                Leading AI textbooks define the field as the study of
                "intelligent agents": any device that perceives its environment
                and takes actions that maximize its chance of successfully
                achieving its goals.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {isAboutVisible && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "3rem",
            marginTop: "5rem",
            height: "100vh",
          }}
        >
          <motion.div
            id="skills"
            className="skills"
            ref={skillsRef} // Attach the ref
            initial={{ x: "-100%", opacity: 0 }} // Initial position and opacity
            animate={{ x: skillsInView ? "0" : "-100%", opacity: 1 }} // Animate in from the left and fade in
            transition={{ duration: 0.5 }} // Transition duration
            style={{
              position: "relative",
              // width: "100%",
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "2rem",
              color: "white",
              fontFamily: "IBM Plex Mono",
              borderLeft: "6px solid #EB5160",
              borderRadius: "2px",
              width: "80vw",
              background:
                "linear-gradient(270deg, #071013 0.16%, #0C181B 99.85%)",
            }}
          >
            <motion.h2
              initial={{ x: "-100%" }} // Initial x position for heading
              animate={{ x: "0" }} // Animate heading coming in from the left
              transition={{ duration: 0.5 }} // Duration for heading animation
              style={{ fontSize: "3rem" }}
            >
              &lt;Skills&gt;
            </motion.h2>
            <motion.p
              initial={{ x: "-100%" }} // Initial x position for paragraph
              animate={{ x: "0" }} // Animate paragraph coming in from the left
              transition={{ duration: 0.5, delay: 0.2 }} // Delay and duration for paragraph animation
              style={{ fontSize: "1.6rem" }}
              className="par"
            >
              HTML, JavaScript, CSS, TypeScript, React, React Native <br />{" "}
              Angular, Redux, Git, Node, Firebase, Photoshop, Illustrator <br />{" "}
              After Effects, MUI, Figma, Postman
            </motion.p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              {/* Render your skill images here */}
              {/* Replace src with the actual image paths */}
              {skillImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Skill ${index + 1}`}
                  style={{ maxWidth: "100px" }}
                />
              ))}
            </div>
          </motion.div>
          <div
            style={{ position: "relative", zIndex: "9", right: "2rem" }}
            className="typer"
          >
            <img src="./mecoding.png" alt="" />
          </div>
        </div>
      )}

      {isAboutVisible && (
        <div
          style={{
            backgroundImage: 'url("blueprint-type-background-cartoon 1.png")', // Reemplaza con tu URL de imagen
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <h1
              style={{
                paddingBottom: "0.8rem",
                fontFamily: "IBM Plex Mono",
                fontSize: "2.3rem",
              }}
            >
              Recent Projects
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="grid-container"
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <motion.div
                    key={index}
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    style={{
                      flex: "1 0 calc(25% - 20px)",
                      margin: "10px",
                      backgroundColor: "red",
                      borderRadius: "12px",
                      height: "300px",
                      width: "150px",
                    }}
                  >
                    {index}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {isAboutVisible && (
        <div
        className="download-section"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src="./assets/thanks.png" style={{marginBottom:"-7rem"}} alt="" className="thanks-img"/>
          <motion.button
            className="btn-pink"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "resume.pdf"; // Cambia esto al nombre que desees para el archivo descargado
              link.click();
            }}
          >
            Download Resume
          </motion.button>
        </div>
      )}
    </>
  );
};

export default Landing;
