import Banner from "../components/Banner";
import tripleRing from "../assets/triple-ring-display.jpg";
function JewelryPage() {
  return (
    <div className="jewelry-main-container">
      <Banner
        img={tripleRing}
        title="Jewelry"
        desc="Indulge in our curated collection of meticulously handcrafted and thoughtfully designed jewelry, crafted with passion and precision to capture the essence of heartfelt beauty."
        side={true}
        position="0 47%"
      />
      <div className="jewelry-filter-container"></div>
      <div className="grid-main-container"></div>
      <div></div>
    </div>
  );
}

export const jewelryRoute = {
  element: <JewelryPage />,
};
