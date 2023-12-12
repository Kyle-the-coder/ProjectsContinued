import portfolioImg from "../assets/portfolio2.jpg";
import fakeX from "../assets/x.png";
import squares from "../assets/decor.png";
import arrow from "../assets/arrow.png";
import rightArrow from "../assets/right.png";

export function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-top">
        <div className="portfolio-top-display">
          <h1 className="portfolio-top-display-text">I'm Greta May Evans</h1>
        </div>
      </div>
      <div className="portfolio-bottom">
        <div className="portfolio-bottom-display-container">
          <p className="portfolio-bottom-display-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="portfolio-bottom-display-button-container">
            <button className="portfolio-bottom-display-button">
              View My Work
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
      <div className="portfolio-img-container">
        <div className="portfolio-img-container-top-bar">
          <div className="portfolio-png-top-bar-display">
            <img src={fakeX} className="portfolio-png" />
          </div>
        </div>
        <img src={portfolioImg} className="portfolio-img" />
      </div>
    </div>
  );
}
