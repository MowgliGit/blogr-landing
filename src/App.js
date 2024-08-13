import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainPart1 from "./components/MainPart1";
import MainPart2 from "./components/MainPart2";
import MainPart3 from "./components/MainPart3";
import Footer from "./components/Footer";
import "./App.css";
import "./Queries.css";

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 608);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 608);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App">
      <Header
        isDropdownOpen={isDropdownOpen}
        isDesktop={isDesktop}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleDropdownToggle={handleDropdownToggle}
      />
      <MainPart1 />
      <MainPart2 />
      <MainPart3 />
      <Footer />
    </div>
  );
}

export default App;
