import LeftPane2 from "./components/2LeftPane";
import RightPane2 from "./components/2RightPane";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import SplitScreen from "./HOC/SplitScreen";

function App() {
  return (
    <div className="main-container">
      <SplitScreen leftOrRight={true}>
        <LeftPane />
        <RightPane />
      </SplitScreen>
      <SplitScreen leftOrRight={false}>
        <LeftPane2 />
        <RightPane2 />
      </SplitScreen>
      <SplitScreen leftOrRight={true}>
        <LeftPane />
        <RightPane />
      </SplitScreen>
    </div>
  );
}

export default App;
