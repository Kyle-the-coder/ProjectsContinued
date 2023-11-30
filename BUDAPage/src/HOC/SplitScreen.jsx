import { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreen({ children, left, right }) {
  const [leftPane, rightPane] = children;
  const [isEnter, setIsEnter] = useState(false);
  return (
    <>
      {right && (
        <div className="container">
          <div className="pane">
            {leftPane}
            {left && (
              <button className="btn" onClick={() => setIsEnter(true)}>
                Enter
              </button>
            )}
          </div>

          <div className="pane"></div>

          <div
            className={`pane ${
              right && isEnter ? "scroll-pane-right" : "still-pane-right"
            }`}
          >
            {rightPane}
            {right && (
              <button className="btn" onClick={() => setIsEnter(true)}>
                Enter
              </button>
            )}
          </div>
        </div>
      )}
      {left && (
        <div className="container">
          <div
            className={`pane ${
              left && isEnter ? "scroll-pane-left" : "still-pane-left"
            } `}
          >
            {leftPane}
            {left && (
              <button className="btn" onClick={() => setIsEnter(true)}>
                Enter
              </button>
            )}
          </div>

          <div className="pane"></div>

          <div className="pane">
            {rightPane}
            {right && (
              <button className="btn" onClick={() => setIsEnter(true)}>
                Enter
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
