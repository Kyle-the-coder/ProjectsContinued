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
        bgColorBeg={"rgb(174, 231, 109)"}
        bgColorEnd={"rgb(233, 207, 68)"}
      />
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
