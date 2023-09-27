import React, { useEffect, useState } from "react";
import "../styles/landing.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion"; // Import framer-motion
import { useInView } from "react-intersection-observer";
import resumePDF from "./cv-kahn-2023.pdf";
import triviamerica from "./triviamerica.png";
import doi from "./doi2.png";
import gemplaces from "./gemplaces.png";
import viena from "./vienalogo.png";
import brickbitz from "./brickbitz.png";
import brains from "./brains.jpg";

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

  const isMobile = window.innerWidth <= 768;

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

  useEffect(() => {
    // Check if the current URL contains the hash for the 'about' section
    if (window.location.hash === "#about") {
      if (isAboutVisible) {
        // Scroll to the 'about' section smoothly
        window.scrollTo({
          top: document.getElementById("about").offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [isAboutVisible]);

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

  const data = [
    {
      foto: brickbitz,
      titulo: "Blockchain Project",
      link: "https://brickbitz.com/",
    },

    { foto: doi, titulo: "USA campaign", link: "https://sign1776.com/" },

    {
      foto: triviamerica,
      titulo: "Trivia Website",
      link: "https://triviamerica.com/",
    },
    // { foto: viena, titulo: "Brand Landing Page", link: "vienaglobal.com" },
    // { foto: brains, titulo: "NFT generator", link: "" },
    { foto: gemplaces, titulo: "Blog site", link: "https://gemplaces.com/" },
  ];

  const [aboutRef, aboutInView] = useInView();
  const [skillsRef, skillsInView] = useInView();

  return (
    <>
      <div
        style={{ height: "100vh", marginTop: "5rem" }}
        className="first-section"
      >
        <div style={{ marginLeft: "3rem" }}>
          <TypewriterText text="&gt; Loading..." isVisible={isLoadingVisible} />
          {isImageVisible && (
            <img
              style={{
                marginTop: "1rem",
                width: "300px",
                objectFit: "cover",
                height: "300px",
              }}
              src="./me.jpg"
              alt=""
            />
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
          {isIntroVisible && (
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
          )}
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
                I recently graduated as an Information Systems Engineer.
                Computers and art have fascinated me since I was a child, and I
                decided to combine these interests, which led me to discover my
                passion. I enjoy UX/UI design, where I use my knowledge of art
                and marketing to create practical solutions for businesses. I'm
                also an artist and I always try to add a creative touch to my
                work to make it unique. I thrive in team environments and have
                often taken on leadership roles, which I've found to be another
                great passion. I aim to make a positive impact wherever I go,
                even if it's just by helping and sharing with those around me.
                I'm committed to a lifelong journey of learning and creating,
                always looking for opportunities to grow.
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
          {isMobile ? (
            <div
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
              <h2
                initial={{ x: "-100%" }} // Initial x position for heading
                animate={{ x: "0" }} // Animate heading coming in from the left
                transition={{ duration: 0.5 }} // Duration for heading animation
                style={{ fontSize: "3rem" }}
              >
                &lt;Skills&gt;
              </h2>
              <p
                initial={{ x: "-100%" }} // Initial x position for paragraph
                animate={{ x: "0" }} // Animate paragraph coming in from the left
                transition={{ duration: 0.5, delay: 0.2 }} // Delay and duration for paragraph animation
                style={{ fontSize: "1.6rem" }}
                className="par"
              >
                HTML, JavaScript, CSS, TypeScript, React, React Native <br />{" "}
                Angular, Redux, Git, Node, Firebase, Photoshop, Illustrator{" "}
                <br /> After Effects, MUI, Figma, Postman
              </p>
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
            </div>
          ) : (
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
                Angular, Redux, Git, Node, Firebase, Photoshop, Illustrator{" "}
                <br /> After Effects, MUI, Figma, Postman
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
          )}

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
          id="projects"
          style={{
            backgroundImage: 'url("blueprint-type-background-cartoon 1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            height: "fit-content",
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
                marginTop: "8rem",
              }}
            >
              Recent Projects
            </h1>
            <div
              className="grid-change"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "60vw",
              }}
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="box"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    margin: "10px",
                    borderRadius: "12px",
                    height: "400px",
                    width: "calc(33.33% - 20px)", // 33.33% para mostrar 3 elementos por fila
                    boxSizing: "border-box",
                  }}
                >
                  <a
                    href={item.link}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <img
                      style={{
                        height: "300px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                      src={item.foto}
                      alt={item.titulo}
                    />
                    <h2 style={{ marginTop: "10px" }}>{item.titulo}</h2>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {isAboutVisible && (
        <div
          id="resume"
          className="download-section"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/thanks.png"
            style={{ marginBottom: "-7rem" }}
            alt=""
            className="thanks-img"
          />
          <motion.button
            className="btn-pink"
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap
            onClick={() => {
              const link = document.createElement("a");
              link.href = resumePDF;
              link.download = "kahn-cv.pdf"; // Cambia esto al nombre que desees para el archivo descargado
              link.click();
            }}
          >
            Download Resume
          </motion.button>
        </div>
      )}
      {isAboutVisible && (
        <div
          className="contact"
          id="contact"
          style={{
            width: "99.1vw",
            backgroundColor: "#eb5160",
            textAlign: "center",
            color: "white",
          }}
        >
          <h2
            style={{
              paddingTop: "2rem",
              marginBottom: "2rem",
              fontSize: "2rem",
            }}
          >
            Contact
          </h2>
          <div
            className="links"
            style={{
              paddingBottom: "2rem",
              display: "flex",
              width: "99.1vw",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a
              style={{
                color: "white",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              href="https://www.linkedin.com/in/tomas-kahn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2.5em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </a>
            <a
              style={{
                color: "white",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              href="https://wa.me/3516791729"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2.5em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </a>
            <a
              style={{
                color: "white",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
              href="mailto:tomikahn2000@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2.5em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fff"
                  d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Landing;
