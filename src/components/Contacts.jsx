import React from "react";

function Contacts() {
  return (
    <footer className="contacts-container" id="contacts-section">
      <nav className="contacts-content-container">
        <div>
          <h1 className="connect">Connect with me.</h1>
        </div>
        <div>
          <h2 className="opportunity-two">Looking for opportunity.</h2>
        </div>
        <div>
          <p className="opportunity-three">
            I'm <span>currently</span> looking for an <span>opportunity</span>{" "}
            to work as a <span>Jr. Front-End Web Developer</span>. If you're{" "}
            <span>looking</span> / <span>hiring</span>, I'm available to work{" "}
            <span>full-time</span> as soon as possible.{" "}
          </p>
        </div>
        <div>
          <a href="#" className="hire">
            Hire
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Contacts;
