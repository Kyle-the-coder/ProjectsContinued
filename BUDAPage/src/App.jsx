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
        isScrollLeft={true}
        bgColorBeg={"rgb(233, 247, 168)"}
        bgColorEnd={"rgb(233, 207, 68)"}
      />
      <SplitScreenContainer
        StillComp={BreakDancerVid}
        SlidableComp={BreakDanceDisplay}
        isScrollRight={true}
        bgColorBeg={"rgb(233, 207, 68)"}
        bgColorEnd={"rgb(233, 247, 168)"}
      />
    </div>
  );
}

export default App;
