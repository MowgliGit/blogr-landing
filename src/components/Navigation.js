function Navigation({
  isDesktop,
  isMenuOpen,
  isDropdownOpen,
  toggleMenu,
  handleDropdownToggle,
}) {
  const menuItems = [
    {
      name: "Product",
      link: "#product",
    },
    {
      name: "Company",
      link: "#company",
    },
    {
      name: "Connect",
      link: "#connect",
      dropdown: [
        {
          name: "Contact",
          link: "#contact",
        },
        {
          name: "Newsletter",
          link: "#newsletter",
        },
        {
          name: "LinkedIn",
          link: "#linkedin",
        },
      ],
    },
  ];

  return (
    <div className="navigation">
      <div className="logoName">
        <p>Blogr</p>
      </div>
      <button className="hamburgerMenu" onClick={toggleMenu}>
        {!isMenuOpen ? (
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-hamburger.svg`}
            alt="hamburger menu"
            className="hamburgerMenuIcon"
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
            alt="hamburger menu"
            className="hamburgerMenuClose"
          />
        )}
      </button>
      {isDesktop || isMenuOpen ? (
        <div className="flexNav">
          <nav className="nav">
            <ul className="navList">
              {menuItems.map((item, index) => (
                <li key={index} className="navItem">
                  <a
                    href={item.link}
                    className={`navLink ${item.dropdown ? "navLinkOpen" : ""}`}
                  >
                    {item.name}
                  </a>
                  {!isMenuOpen ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon-arrow-light.svg`}
                      alt="icon-nav-light"
                      className={`iconNav iconNavLight ${
                        isDropdownOpen && item.dropdown ? "iconNavRotate" : ""
                      }`}
                      onClick={item.dropdown ? handleDropdownToggle : undefined}
                    />
                  ) : (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon-arrow-dark.svg`}
                      alt="icon-nav-dark"
                      className={`iconNav iconNavDark ${
                        isDropdownOpen && item.dropdown ? "iconNavRotate" : ""
                      }`}
                      onClick={item.dropdown ? handleDropdownToggle : undefined}
                    />
                  )}

                  {item.dropdown && isDropdownOpen && (
                    <ul
                      className={`navListDropDown ${
                        isDropdownOpen ? "navListDropDownOpen" : ""
                      }`}
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href={subItem.link} className="navLinkDropDown">
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="cta">
            {!isMenuOpen ? "" : <hr />}
            <div className="login">
              <a href="#login" className="loginLink">
                Login
              </a>
            </div>
            <button className="signUp">
              <a href="#signup" className="signUpLink">
                Sign up
              </a>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navigation;
