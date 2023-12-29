import Banner from "../components/Banner";
import rings from "../assets/rings2.mp4";
function LandingPage() {
  return (
    <div className="landing-main-container">
      <Banner
        img={null}
        video={rings}
        title="Rings For All"
        desc="Discover captivating and fashionable rings for those seeking to express their style and embark on adventures."
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
