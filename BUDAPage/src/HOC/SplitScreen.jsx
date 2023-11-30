import { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreen({ children, left, right }) {
  const [leftPane, rightPane] = children;
  const [isEnter, setIsEnter] = useState(false);
  return (
    <>
      <div className="container">
        <div className={`pane ${left ? "scroll-pane-left" : ""}`}>
          {leftPane}
          {left && (
            <button className="btn" onClick={() => setIsEnter(true)}>
              Enter
            </button>
          )}
        </div>

        <div className="pane"></div>

        <div className={`pane ${right ? "scroll-pane-right" : ""}`}>
          {rightPane}
          {right && (
            <button className="btn" onClick={() => setIsEnter(true)}>
              Enter
            </button>
          )}
        </div>
      </div>
    </>
  );
}
