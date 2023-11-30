import BreakDancerVid from "./components/BreakDancerVid";
import BreakDanceDisplay from "./components/BreakDanceDisplay";
import PopperVid from "./components/PopperVid";
import HipHopDisplay from "./components/PoppingDisplay";
import SplitScreenContainer from "./containers/SplitScreenContainer";

function App() {
  return (
    <div className="main-container">
      <SplitScreenContainer
        StillComp={PopperVid}
        SlidableComp={HipHopDisplay}
        isScrollRight={true}
        bgColor={"rgb(233, 247, 168)"}
      />
    </div>
  );
}

export default App;
