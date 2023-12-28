import { useState } from "react";
import PexelsRes from "./api/PexelsRes";
import ImgGrid from "./components/ImgGrid";
import MouseTracker from "./components/MouseTracker";
import { TextDisplay } from "./components/TextDisplay";
import "./styles/main.css";
function App() {
  return (
    <>
      <MouseTracker />
      <div className="main-container">
        <TextDisplay />
        <ImgGrid />
      </div>
    </>
  );
}

export default App;
