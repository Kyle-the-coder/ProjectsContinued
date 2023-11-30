import LeftPane2 from "./components/2LeftPane";
import RightPane2 from "./components/2RightPane";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";
import SplitScreen from "./HOC/SplitScreen";

function App() {
  return (
    <div className="main-container">
      <SplitScreen right={true} left={false}>
        <LeftPane />
        <RightPane />
      </SplitScreen>
      <SplitScreen left={true} right={false}>
        <LeftPane2 />
        <RightPane2 />
      </SplitScreen>
      <SplitScreen right={true} left={false}>
        <LeftPane />
        <RightPane />
      </SplitScreen>
    </div>
  );
}

export default App;
