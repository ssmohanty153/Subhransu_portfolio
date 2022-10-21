import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://github.com/RahulGoyal03/Portfolio/blob/main/public/developer.gif?raw=true"
          }
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Hello! My name is Subhransu and I like to build websites/application
          that serves the world and always want to enhance my knowledge & adpot
          new technologies that make impact on people. 2 + years of proven
          software industry experience worked on multiple WIFI products related
          to technology, and Android applications, where I contribute as Node,
          Angular, and React developers.
          <br />
          <br /> Fast Forwarding to today, I built a number of web applications
          and major projects. Experienced in MERN stack development Mongo dB,
          Express, Node, and React. Learned a great deal about teamwork,
          leadership, and communication. After 2 Years of Experience, here I am
          <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for an opportunity as a full stack web developer
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
