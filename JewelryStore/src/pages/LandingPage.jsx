import Banner from "../components/Banner";
import rings from "../assets/rings2.mp4";
function LandingPage() {
  return (
    <div className="landing-main-container">
      <Banner
        img={null}
        video={rings}
        title="Engagement By T.P.J."
        desc="At the heart of our engagement rings is the experience of creating a memory—a symbol that encapsulates the beauty of your love story."
        side={true}
        position="0 50%"
      />
      <div></div>
    </div>
  );
}

export const landingRoute = {
  element: <LandingPage />,
};
