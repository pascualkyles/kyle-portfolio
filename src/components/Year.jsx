import React from "react";

function Year() {
  const year = new Date().getFullYear();

  return <div className="year">{year}</div>;
}

export default Year;
