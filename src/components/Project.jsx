import React from "react";
import desktopBackground from "./asset/desktopBackground.png";
import desktop from "./asset/desktop.png";
import tablet from "./asset/tablet.png";
import mobile from "./asset/mobile.png";

function Project() {
  return (
    <section className="project-container" id="projects-section">
      <div className="project-content-container">
        <h1 className="responsive-design">Responsive Design</h1>
        <div className="desktop-image-container">
          <img
            className="desktop-background"
            src={desktopBackground}
            alt="desktop-background"
          />
          <img className="desktop-image" src={desktop} alt="desktop-image" />
          <div className="details">
            <p className="laptop-size">769px - 1024px</p>
            <h2 className="laptop-breakpoint">Laptop Breakpoint</h2>
          </div>
        </div>
        <div className="desktop-image-container-two">
          <div className="details-two">
            <p className="laptop-size-two">481px - 768px</p>
            <h2 className="tablet-breakpoint">Tablet Breakpoint</h2>
          </div>
          <img
            className="desktop-background-two"
            src={desktopBackground}
            alt="desktop-background"
          />
          <img className="desktop-image-two" src={tablet} alt="desktop-image" />
        </div>
        <div className="desktop-image-container-three">
          <img
            className="desktop-background-three"
            src={desktopBackground}
            alt="desktop-background"
          />
          <img
            className="desktop-image-three"
            src={mobile}
            alt="desktop-image"
          />
          <div className="details-three">
            <p className="laptop-size">320px - 480px</p>
            <h2 className="laptop-breakpoint">Mobile Breakpoint</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
