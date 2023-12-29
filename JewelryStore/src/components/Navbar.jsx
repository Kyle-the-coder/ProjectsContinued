import "../styles/navbar.css";
import logo from "../assets/j-store-logo.jpeg";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
import { useEffect, useState } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".active", 0.8, {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
      });
    }
  }, [hoverIndex]);
  return (
    <nav className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-info-locations">
          <p className="font1">Santa Rosa</p>
          <p className="font1">|</p>
          <p className="font1">Santa Clara</p>
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
                key={link}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="navbar-link" href="/engagement">
                  {link}
                </a>
                {hoverIndex === index && <div className="active"></div>}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
