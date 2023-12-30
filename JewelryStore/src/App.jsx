import Banner from "./components/Banner";
import dualRing from "./assets/dual-ring-display.jpg";
import darkRing from "./assets/ring-dark-display.jpg";
import greenRing from "./assets/rings-green-display.jpg";
import "./styles/main.css";
function App() {
  return (
    <div className="main-container">
      <Banner
        img={dualRing}
        title="Wedding Rings"
        desc="Find the perfect ring for your love story"
        side={false}
        position="0 50%"
      />
    </div>
  );
}

export default App;
