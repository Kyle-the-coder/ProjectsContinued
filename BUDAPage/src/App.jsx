import LeftPane2 from "./components/2LeftPane";
import RightPane2 from "./components/2RightPane";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import SplitScreenContainer from "./containers/SplitScreenContainer";
import SplitScreen from "./HOC/SplitScreen";

function App() {
  return (
    <div className="main-container">
      <SplitScreenContainer Left={LeftPane} Right={RightPane} />
    </div>
  );
}

export default App;
