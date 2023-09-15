import React from "react";
import headerMenu from "./asset/headerMenu.png";
import resume from "./asset/resume.pdf";

function Header() {
  const slowTransition = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header-main-container">
      <nav className="header-content-container">
        <div className="logo">K</div>
        <nav className="header-nav-container">
          <ul className="header-nav-content">
            <li>
              <a id="about" href="#about-section" onClick={slowTransition}>
                About
              </a>
            </li>
            <li>
              <a
                id="technologies"
                href="#technologies-section"
                onClick={slowTransition}
              >
                Technologies
              </a>
            </li>
            <li>
              <a
                id="projects"
                href="#projects-section"
                onClick={slowTransition}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                id="contacts"
                href="#contacts-section"
                onClick={slowTransition}
              >
                Contacts
              </a>
            </li>
          </ul>
          <a className="resume" href={resume} download="resume.pdf">
            Resume
          </a>
        </nav>
        <div className="header-menu-container">
          <button className="header-menu-button">
            <img className="menu" src={headerMenu} alt="menu" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
