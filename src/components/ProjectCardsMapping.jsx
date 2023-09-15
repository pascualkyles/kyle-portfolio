import React from "react";
import projects from "../miniProjects";
import Card from "./Card";

function ProjectCardDetails(info) {
  return (
    <Card key={info.id} title={info.title} description={info.description} />
  );
}

function ProjectCardsMapping() {
  return (
    <section className="project-cards-container">
      <h1 className="snippets">Snippets</h1>
      <div className="snippets-grid">{projects.map(ProjectCardDetails)}</div>;
      <div>
        <button className="snippets-button">Show More</button>
      </div>
    </section>
  );
}

export default ProjectCardsMapping;
