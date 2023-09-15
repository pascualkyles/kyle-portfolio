import React from "react";
import Greeting from "./Greeting";

function Landing() {
  return (
    <section className="landing-container">
      <div className="landing-content-container">
        <div className="greeting">
          <Greeting />
        </div>
        <h1 className="my-name">Kyle Pascual.</h1>
        <h2 className="my-mantra">Learn. Design. Code. Repeat.</h2>
        <div className="my-description">
          <p>
            I'm an aspiring <span>Software Engineer</span> specializing in{" "}
            <span>Front-End development</span>. Currently, my forte revolves
            around <span>UI / UX design</span> and I'm also learning basic up to
            complex functionalities in <span>Javascript / React</span>.
          </p>
        </div>
        <a
          href="https://frontendmasters.com/guides/front-end-handbook/2018/what-is-a-FD.html"
          target="_blank"
          className="front-end-web-development"
        >
          Front - End Web Developer
        </a>
      </div>
    </section>
  );
}

export default Landing;
