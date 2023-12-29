import "../styles/navbar.css";
import logo from "../assets/j-store-logo.jpeg";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const links = [
    { linkName: "Engagement Rings", link: "/engagement" },
    { linkName: "Wedding Rings", link: "/wedding" },
    { linkName: "Jewelry", link: "/jewelry" },
    { linkName: " Designers", link: "/designers" },
    { linkName: " Services", link: "/services" },
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
        <div className="navbar-info-logo pointer" onClick={() => navigate("/")}>
          <img src={logo} />
          <p className="f1-5">Timothy Patrick Jewelers</p>
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
                key={link.linkName}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="navbar-link" href={link.link}>
                  {link.linkName}
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
