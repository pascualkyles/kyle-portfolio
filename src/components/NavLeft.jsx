import React from "react";
import github from "./asset/github.svg";
import instagram from "./asset/instagram.svg";
import twitter from "./asset/twitter.svg";
import facebook from "./asset/facebook.svg";
import linkedin from "./asset/linkedin.svg";

function NavLeft() {
  return (
    <nav className="nav-left-container">
      <a href="https://github.com/" target="_blank">
        <img className="nav-left-img" src={github} alt="github" />
      </a>
      <a href="https://www.instagram.com/?hl=en" target="_blank">
        <img className="nav-left-img" src={instagram} alt="instagram" />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <img className="nav-left-img" src={twitter} alt="twitter" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <img className="nav-left-img" src={facebook} alt="facebook" />
      </a>
      <a href="https://www.linkedin.com/" target="blank">
        <img className="nav-left-img" src={linkedin} alt="linkedin" />
      </a>
      <a>
        <div className="nav-left-div"></div>
      </a>
    </nav>
  );
}

export default NavLeft;
