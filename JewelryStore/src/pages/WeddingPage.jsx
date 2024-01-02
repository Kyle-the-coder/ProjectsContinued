import Banner from "../components/Banner";
import rings from "../assets/wedding-rings-display.jpg";
import WeddingRingDisplay from "../components/WeddingRingDisplay";

function WeddingPage() {
  return (
    <div className="landing-main-container">
      <Banner
        img={rings}
        title="Wedding Rings"
        desc="Symbolizing Forever in Every Ring."
        side={false}
        position="0 27%"
      />
      <WeddingRingDisplay />
      <div></div>
    </div>
  );
}

export const weddingRoute = {
  element: <WeddingPage />,
};
