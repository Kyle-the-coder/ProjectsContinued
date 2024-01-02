import Banner from "../components/Banner";
import greenRing from "../assets/rings-green-display.jpg";
import DesignerDisplay from "../components/DesignerDisplay";
function DesignersPage() {
  return (
    <div className="engagement-main-container">
      <Banner
        img={greenRing}
        title="Designers"
        desc="At the intersection of imagination and expertise, our designers bring you jewelry that transcends the ordinary. Uncover the beauty of our thoughtfully crafted designs."
        side={true}
        position="0 47%"
      />
      <DesignerDisplay />
      <div></div>
    </div>
  );
}

export const designersRoute = {
  element: <DesignersPage />,
};
