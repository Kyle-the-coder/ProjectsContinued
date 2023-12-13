import portfolioImg from "../assets/portfolio2.jpg";
import fakeX from "../assets/x.png";
import squares from "../assets/decor.png";
import arrow from "../assets/arrow.png";
import rightArrow from "../assets/right.png";
import { useEffect, useState } from "react";
import { NavBar } from "../components/Navbar";

export function Portfolio() {
  const [isActive, setIsActive] = useState(false);
  const [imgActive, setImgActive] = useState(false);

  const navbarOptions = ["Home", "My Portfolio", "Bio", "Calendar", "Contact"];

  useEffect(() => {
    setTimeout(() => {
      if (!isActive) {
        setIsActive(true);
      }
    }, 3000);
    setTimeout(() => {
      if (!imgActive) {
        setImgActive(true);
      }
    }, 2000);
  }, [isActive, imgActive]);

  return (
    <div className="portfolio-home-container">
      <NavBar navOptions={navbarOptions} />
      <div className="portfolio-container">
        <div className="portfolio-top">
          <div className="portfolio-top-display">
            <h1
              className={`portfolio-top-display-text ${isActive && "active"}`}
            >
              I'm Greta May Evans
            </h1>
          </div>
        </div>
        <div className="portfolio-bottom">
          <div className="portfolio-bottom-display-container">
            <p
              className={`portfolio-bottom-display-text ${
                isActive && "active"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              className={`portfolio-bottom-display-button-container ${
                imgActive && "active"
              }`}
            >
              <button
                onClick={() => {
                  setImgActive(false);
                  setIsActive(false);
                }}
                className="portfolio-bottom-display-button"
              >
                <p>View My Work</p>
                <img
                  src={rightArrow}
                  className="portfolio-bottom-display-button-png"
                />
              </button>
              <img
                src={arrow}
                className="portfolio-bottom-display-png-arrow"
                width="30"
              />
              <img
                src={squares}
                className="portfolio-bottom-display-png-squares"
                width="40"
              />
              <img
                src={squares}
                className="portfolio-bottom-display-png-squares-2"
                width="40"
              />
            </div>
          </div>
        </div>
        <div className={`portfolio-img-container ${imgActive && "active"}`}>
          <div className="portfolio-img-container-top-bar">
            <div className="portfolio-png-top-bar-display">
              <img src={fakeX} className="portfolio-png" />
            </div>
          </div>
          <img src={portfolioImg} className="portfolio-img" />
        </div>
      </div>
    </div>
  );
}
