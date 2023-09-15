import React from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import NavLeft from "./components/NavLeft.jsx";
import NavRight from "./components/NavRight.jsx";

function App() {
  return (
    <main>
      <Header />
      <Main />
      <NavLeft />
      <NavRight />
    </main>
  );
}

export default App;
