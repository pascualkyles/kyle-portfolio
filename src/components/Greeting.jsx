import React from "react";

function Greeting() {
  let greeting;

  const time = new Date().getHours();

  if (time < 12) {
    greeting = "Good Morning,";
  } else if (time < 18) {
    greeting = "Good Afternoon,";
  } else {
    greeting = "Good Evening,";
  }

  return <div>{greeting + " my name is"}</div>;
}

export default Greeting;
