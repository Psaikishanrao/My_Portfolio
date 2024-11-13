// import React from "react";
// function Header() {
 
//   return (
//     <div className="p-5 bg-primary flex justify-between">
//       <h1 className="text-secondary text-4xl font-semibold">
//       S
//       </h1>
//       <h1 className="text-white text-4xl font-semibold">
//         K
//       </h1>
//       <h1 className="text-tertiary text-4xl font-semibold">
//         R
//       </h1>
//     </div>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`NavbarItems ${isScrolled ? "scrolled" : ""}`}>
        <div className="menu-icons" onClick={handleClick}>
          <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <button
              onClick={() => scrollToSection("intro")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa fa-id-badge"></i> Intro
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa-solid fa-address-card"></i> About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experiences")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa fa-user-tie"></i> Experiences
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("project")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa fa-briefcase"></i> Project
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("courses")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa fa-certificate"></i> Courses
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-links text-white hover:text-yellow-400"
            >
              <i className="fa fa-address-book"></i> Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
