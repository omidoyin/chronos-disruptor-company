import React from "react";
import "../styles/css/hero.min.css";
// import image from "../assets/myProfilePic.png";
// import image from "../assets/mine1.jpeg";
// import image from "../assets/mine2.jpeg";
import image from "../assets/mine33.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-flex container">
        <div className=" left-section">
          <div className="texts">
            <h2>Hi, I'm Ayodeji </h2>
            <p>
              A software developer with passion for learning and creating high
              performance web app.
            </p>
            <p className="gbg">
              <span className="bg"> I </span>
              <span className="bg"> develop </span>
              <span className="bg"> beautiful </span>
              <span className="bg"> and </span>
              <span className="bg"> responsive </span>
              <span className="bg"> SEO </span>
              <span className="bg"> optimized </span>
              <span className="bg"> websites. </span>
            </p>
            <div>
              <li className="icon">
                <a href="https://github.com/omidoyin?tab=repositories">
                  <GitHubIcon fontSize="" />
                </a>
              </li>
              <li className="icon">
                <a href="https://www.linkedin.com/in/ayodeji-omidoyin-872448123">
                  <LinkedInIcon fontSize="" />
                </a>
              </li>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
