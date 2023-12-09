import { useRef } from "react";
import arrow from "../assets/arrowhead.png";
import logo from "../assets/adsense.png";
import techBg from "../assets/techBg.mp4";

export function Home() {
  return (
    <div className="home-container">
      <div className="home-video-container">
        <video
          className="home-video"
          src={techBg}
          autoPlay
          muted
          loop
          controls={false}
        />
      </div>
      <div class="vignette-overlay"></div>
      <div className="home-display-container">
        <div className="home-display-logo-container">
          <img src={logo} className="logo " />
          <h1 className="my-3 f-5">Dance Technologies</h1>
          <p className="my-3">Movement and Capture Development</p>
        </div>

        <div className="home-button-container">
          <div className="home-left-buttons-container">
            <button className="home-button">
              Company Website <img src={arrow} width="10" />{" "}
            </button>
            <button className="home-button">
              Founder's Podcast <img src={arrow} width="10" />
            </button>
          </div>
          <div className="home-right-buttons-container">
            <button className="home-button">
              Company Portfolio <img src={arrow} width="10" />{" "}
            </button>
            <button className="home-button">
              Live Project <img src={arrow} width="10" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
