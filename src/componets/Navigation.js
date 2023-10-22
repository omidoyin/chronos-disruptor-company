import React, { useState } from "react";
import "../styles/css/navigation.min.css";
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Navigation = () => {
  const[toggle, setTogle] = useState(false)
  let navigate = useNavigate();
  return (
    <header >
      <div className="nav-bar container">
        <div>
          <h2>
            <span  onClick={() => {
              navigate("/");
            }}>A</span>OD
          </h2>
        </div>
        <nav className={toggle? "show":null}>
          <li
            onClick={() => {
              navigate("/");
              setTogle(prev=>!prev)
            }}
          >
            HOME
          </li>
          <li
            onClick={() => {
              navigate("/projects");
              setTogle(prev=>!prev)
            }}
          >
            PROJECTS
          </li>
          <li
            onClick={() => {
              navigate("/experience");
              setTogle(prev=>!prev)
            }}
          >
            EXPERIENCE
          </li>
          {/* <li>MENU</li>  */}
        </nav>
        <div className="toggle-btn" onClick={()=>(setTogle(prev=>!prev))}>
         {
          toggle ? <HighlightOffIcon className="icon"/> : <MenuIcon className="icon"/>
         }
        </div>
      </div>
    </header>
  );
};

export default Navigation;
