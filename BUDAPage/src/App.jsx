import BreakDancerVid from "./components/BreakDancerVid";
import WelcomeDisplay from "./components/WelcomeDisplay";
import SplitScreenContainer from "./containers/SplitScreenContainer";

function App() {
  return (
    <div className="main-container">
      <SplitScreenContainer
        Right={BreakDancerVid}
        Left={WelcomeDisplay}
        isScrollLeft={true}
        isScrollRight={false}
      />
    </div>
  );
}

export default App;
