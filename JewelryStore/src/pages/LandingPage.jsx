import Banner from "../components/pageDesign/Banner";
import rings from "../assets/landing-vid-3.mp4";
import ImgGrid from "../components/pageDesign/ImgGrid";
import craftsman from "../assets/jewelry-craftsman.jpg";
import LandingTextDisplay from "../components/display/LandingTextDisplay";
import { useInView } from "react-intersection-observer";
import "../styles/landingpage.css";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
function LandingPage() {
  const [animation] = useState(gsap.timeline());

  const [ref, inView] = useInView({});

  useEffect(() => {
    if (inView) {
      animation.from(".craftsman-img", {
        xPercent: -108,
        duration: 2,
        delay: 1,
      });
    }
  }, [inView, animation]);

  return (
    <div className="landing-main-container">
      <Banner
        img={null}
        video={rings}
        title="Engagement By InfiniteLove Designs"
        desc="At the heart of our engagement rings is the experience of creating a memory—a symbol that encapsulates the beauty of your love story."
        side={true}
        position="0 50%"
      />
      <div className="landing-text-display-container">
        <div className="landing-text">
          <h1 className="font4 ">
            From the <span className="font-gold">B</span>eginning, towards{" "}
            <span className="font-green">F</span>orever
          </h1>
          <p className="f-8 font1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
          </p>
        </div>
      </div>
      <div className="landing-img-display-container">
        <LandingTextDisplay />
        <ImgGrid />
      </div>
      <div className="landing-craftsman-display-container" ref={ref}>
        <div className="craftsman-text-display">
          <h1 className="font4">
            In <span className="font-gold">S</span>tore{" "}
            <span className="font-green">C</span>raftsmanship
          </h1>
          <p className="font1 f-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            fermentum justo eget nisl dapibus, nec venenatis justo malesuada.
            Curabitur vel libero nec nisi suscipit pharetra. Duis vel risus eu
            sem fringilla euismod at at tortor. Nullam nec urna in arcu
            tristique facilisis. Sed fringilla velit at turpis aliquam, nec
            vestibulum libero ullamcorper.
          </p>
          <button className="form-button">Services</button>
        </div>
        <div className="craftsman-img-display">
          <img src={craftsman} className="craftsman-img" />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
