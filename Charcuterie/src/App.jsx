import BreakDancerVid from "./components/BreakDancerVid";
import BreakDanceDisplay from "./components/BreakDanceDisplay";
import PopperVid from "./components/PopperVid";
import HipHopDisplay from "./components/PoppingDisplay";
import SplitScreenContainer from "./containers/SplitScreenContainer";
import { Home } from "./pages/Home";
import { Vacay } from "./pages/Vacay";
import "./styles/mainContainer.css";
import { Portfolio } from "./pages/Portfolio";
import { Shop } from "./pages/Shop";
import { MouseTracker } from "./components/MouseTracker";
import { useEffect, useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="main-container">
      <div
        className="mouse-tracker"
        style={{ left: mousePosition.x + "px", top: mousePosition.y + "px" }}
      ></div>
      {/* <DotsContainer /> */}

      <Shop />
      <Portfolio />
      <Vacay />
      <Home />

      {/* <SplitScreenContainer
        SlidableComp={HipHopDisplay}
        StillComp={PopperVid}
        isScrollLeft={true}
        bgColorBeg={"rgb(1, 1, 1)"}
        bgColorEnd={"gold"}
      /> */}
    </div>
  );
}

export default App;
