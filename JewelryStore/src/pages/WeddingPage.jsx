import Banner from "../components/Banner";
import rings from "../assets/rings-display.jpg";
function WeddingPage() {
  return (
    <div className="landing-main-container">
      <Banner
        img={rings}
        title="Wedding Rings"
        desc="Symbolizing Forever in Every Ring."
        side={true}
        position="0 47%"
      />
      <div></div>
    </div>
  );
}

export const weddingRoute = {
  element: <WeddingPage />,
};
