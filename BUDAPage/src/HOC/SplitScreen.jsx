import { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreen({ children, leftOrRight }) {
  const [leftPane, rightPane] = children;
  const [isEnter, setIsEnter] = useState(false);
  return (
    <>
      <div className="container">
        <div className={`pane ${leftOrRight ? "" : "scroll-pane-left"}`}>
          {leftPane}
        </div>

        <div className="pane"></div>

        <div className={`pane ${leftOrRight ? "scroll-pane-right" : ""}`}>
          {rightPane}
          <button className="btn" onClick={() => setIsEnter(true)}>
            Enter
          </button>
        </div>
      </div>
    </>
  );
}
