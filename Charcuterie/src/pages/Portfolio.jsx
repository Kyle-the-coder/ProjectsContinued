import portfolioImg from "../assets/portfolio2.jpg";

export function Portfolio() {
  return (
    <div className="portfolio-container">
      <div className="portfolio-top">
        <h1>hello</h1>
      </div>
      <div className="portfolio-bottom">
        <h2>goodbye</h2>
      </div>
      <div className="portfolio-img-container">
        <div className="portfolio-img-top-bar">
          <p className="portfolio-img-top-bar-display">X</p>
        </div>
        <img src={portfolioImg} className="portfolio-img" />
      </div>
    </div>
  );
}
