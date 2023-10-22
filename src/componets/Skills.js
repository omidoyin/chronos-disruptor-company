import React from "react";
import "../styles/css/skills.min.css";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-flex container">
        <h2 className="header-text">Skills</h2>
        <div >
          <div className="front-end">
            <h2>Front-End</h2>
            <p>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI,
              TialwindCSS, StyledComponents
            </p>
          </div>
          <div className="back-end">
            <h2>Back-End</h2>
            <p>NodeJS, Java Spring, ExpressJS, MongoDB, SQL</p>
          </div>
          <div className="language">
            <h2>Language</h2>
            <p>JavaScript, Java, Python, C#, C, C++, TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
