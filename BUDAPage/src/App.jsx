import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import SplitScreen from "./HOC/SplitScreen";

function App() {
  return (
    <div className="main-container">
      <SplitScreen>
        <LeftPane />
        <RightPane />
      </SplitScreen>
    </div>
  );
}

export default App;
