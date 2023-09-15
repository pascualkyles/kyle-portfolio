import React from "react";

function Technologies() {
  return (
    <section className="technologies-container" id="technologies-section">
      <div className="technologies-content-container">
        <h1 className="technologies-title">Technologies</h1>
        <section className="technologies">
          <article>
            <h2>Languages:</h2>
            <ul>
              <a href="https://html.com/" target="_blank">
                <li id="html">HTML</li>
              </a>
              <a
                href="https://www.w3.org/Style/CSS/Overview.en.html"
                target="blank"
              >
                <li id="css">CSS</li>
              </a>
              <a href="https://www.javascript.com/" target="blank">
                <li id="javascript">Javascript</li>
              </a>
              <a href="https://tailwindcss.com/" target="blank">
                <li id="tailwind">Tailwind</li>
              </a>
              <a href="https://react.dev/" target="blank">
                <li id="react">React</li>
              </a>
            </ul>
          </article>
        </section>
      </div>
    </section>
  );
}

export default Technologies;
