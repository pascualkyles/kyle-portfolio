import React from "react";
import profile from "./asset/profile.jpg";

function About() {
  return (
    <section className="about-container" id="about-section">
      <div className="about-content-container">
        <h1 className="about-me">About Me</h1>
        <div className="about-me-content-container">
          <div className="about-me-description">
            <p className="about-me-first-paragraph">
              I'm a self-taught <span>Front-End Web Developer</span>. I've
              started few months ago learning <span>HTML</span>,{" "}
              <span>CSS</span>, and <span>Javascript</span> as well as their
              framework and library such as <span>Tailwind</span> and{" "}
              <span>React</span>.
            </p>
            <p>
              Currently, I'm working out on my <span>Javascript / React</span>{" "}
              skills for better <span>Web Development</span> functionalities.
            </p>
            <p>
              I don't have any professional experience as of the moment but I'm
              currently working with a senior programmer and we're developing a
              clinic database system using <span>MERN</span> and my current role
              is <span>UI / UX designer</span>.
            </p>
            <p>
              My goal is to work as a full time{" "}
              <span>Front-End Web Developer</span> in a company meeting the
              needs as requested to the best of my ability.{" "}
            </p>
            <p>
              I'm <span>Eager</span>, <span>Willing</span>, and{" "}
              <span>Open</span> to learn more about <span>Web Development</span>{" "}
              and different technologies to up-skill my current level and to be
              able to match the current trend in the I.T. market whether it be
              on <span>Web Design</span> or <span>Functionalities</span>.
            </p>
          </div>
          <div className="about-me-picture-container">
            <img
              className="about-me-picture"
              src={profile}
              alt="profile-picture"
            />
            <div className="about-me-image-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
