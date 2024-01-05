import Banner from "../components/pageDesign/Banner";
import rings from "../assets/landing-vid-3.mp4";
import ImgGrid from "../components/pageDesign/ImgGrid";
import "../styles/landingpage.css";
import LandingTextDisplay from "../components/display/LandingTextDisplay";
function LandingPage() {
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
      <div></div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
