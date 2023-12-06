import BreakDancerVid from "./components/BreakDancerVid";
import BreakDanceDisplay from "./components/BreakDanceDisplay";
import PopperVid from "./components/PopperVid";
import HipHopDisplay from "./components/PoppingDisplay";
import SplitScreenContainer from "./containers/SplitScreenContainer";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="main-container">
      <Home />
      <SplitScreenContainer
        StillComp={BreakDancerVid}
        SlidableComp={BreakDanceDisplay}
        isScrollRight={true}
        bgColorBeg={"rgb(122, 200, 189)"}
        bgColorEnd={"rgb(98, 166, 186)"}
      />
    </div>
  );
}

export default App;
