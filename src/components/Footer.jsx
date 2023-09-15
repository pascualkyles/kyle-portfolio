import React from "react";
import Year from "./Year";
import github from "./asset/github.svg";
import instagram from "./asset/instagram.svg";
import twitter from "./asset/twitter.svg";
import facebook from "./asset/facebook.svg";
import linkedin from "./asset/linkedin.svg";

function Footer() {
  return (
    <div className="footer-container">
      <nav className="footer-content-container">
        <div className="images-container">
          <a className="footer-image">
            <img src={github} alt="svg" />
          </a>
          <a className="footer-image">
            <img src={instagram} alt="svg" />
          </a>
          <a className="footer-image">
            <img src={twitter} alt="svg" />
          </a>
          <a className="footer-image">
            <img src={facebook} alt="svg" />
          </a>
          <a className="footer-image">
            <img src={linkedin} alt="svg" />
          </a>
        </div>
      </nav>
      <div className="footer-credits">
        <p>
          © Kyle Pascual - <Year />
        </p>
      </div>
    </div>
  );
}

export default Footer;
