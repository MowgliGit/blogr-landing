import React from "react";
import Navigation from "./Navigation";

function Header({
  isDesktop,
  isMenuOpen,
  isHeadingOpen,
  isDropdownOpen,
  toggleMenu,
  handleDropdownToggle,
}) {
  return (
    <div className="header">
      <Navigation
        isDesktop={isDesktop}
        isMenuOpen={isMenuOpen}
        isDropdownOpen={isDropdownOpen}
        toggleMenu={toggleMenu}
        handleDropdownToggle={handleDropdownToggle}
      />
      {isMenuOpen ? (
        ""
      ) : (
        <div className="mainHeadingBox">
          <div className="mainHeading">
            <h1 className="mainTittle">A modern publishing platform</h1>
            <p className="mainParagraph">
              Grow your audience and build your online brand
            </p>
            <div className="mainBoxButtons">
              <button className="btn btnPrimary">
                <a href="http://" className="primaryLink">
                  Start for free
                </a>
              </button>
              <button className="btn btnSecondary">
                <a href="http://" className="secondaryLink">
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;

//
//
