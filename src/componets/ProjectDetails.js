import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../data/ProjectsData";
import "../styles/css/productdetails.min.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectDetails = () => {
  let { id } = useParams();
  const project = data[id];
  const navigate = useNavigate()

  return (
    <section className="projectdetails container">
      <span className="icon" onClick={()=>{navigate(-1)}}>
        <KeyboardBackspaceIcon />
      </span>
      <div className="img">
        <img src={project.img} alt="" />
        <h2>{project.title}</h2>
      </div>
      <div className="details">
        <h2><span>Utilized</span>: {project.more}</h2>
        <p > <a href={project.projectLink}><GitHubIcon className="social-icon"/></a> Link to project</p>
        {/* <p>social media icons</p>
        <p>social media icons</p> */}
      </div>
    </section>
  );
};

export default ProjectDetails;
