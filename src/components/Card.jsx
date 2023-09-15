import React from "react";
import folder from "./asset/folder.svg";

function Card(details) {
  return (
    <div className="card">
      <div>
        <img className="card-folder" src={folder} alt="folder" />
      </div>
      <p className="card-title">{details.title}</p>
      <p className="card-description">{details.description}</p>
    </div>
  );
}

export default Card;
