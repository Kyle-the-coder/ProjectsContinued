import "../styles/navbar.css";
import logo from "../assets/j-store-logo.jpeg";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
import { useState } from "react";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };
  const links = [
    "Engagement Rings",
    " Wedding Rings",
    "Jewelry",
    " Designers",
    " Services",
  ];
  return (
    <nav className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-info-locations">
          <p>Santa Rosa</p>
          <p>|</p>
          <p>Santa Clara</p>
        </div>
        <div className="navbar-info-logo">
          <img src={logo} />
          <p className="f2">Timothy Patrick Jewelers</p>
          <p>Est. 2009</p>
        </div>
        <div className="navbar-info-socials">
          <img src={insta} />
          <img src={fb} />
        </div>
      </div>
      <div className="navbar-links-container">
        <ul>
          {links.map((link, index) => {
            return (
              <li
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {link}
                {hoverIndex === index && <div className="active"></div>}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
