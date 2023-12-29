import Banner from "../components/Banner";
import darkRing from "../assets/ring-dark-display.jpg";
function EngagementPage() {
  return (
    <div className="engagement-main-container">
      <Banner
        img={darkRing}
        title="Engagement Rings"
        desc="Seal Your Love with Sparkle."
        side={true}
        position="0 47%"
      />
      <div></div>
    </div>
  );
}

export const engagementRoute = {
  element: <EngagementPage />,
};
