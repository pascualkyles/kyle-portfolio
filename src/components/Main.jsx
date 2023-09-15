import React from "react";
import Landing from "./Landing";
import About from "./About";
import Technologies from "./Technologies";
import Project from "./Project";
import ProjectCardsMapping from "./ProjectCardsMapping";
import Contacts from "./Contacts";
import Footer from "./Footer";

function Main() {
  return (
    <div className="main">
      <Landing />
      <About />
      <Technologies />
      <Project />
      <ProjectCardsMapping />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
