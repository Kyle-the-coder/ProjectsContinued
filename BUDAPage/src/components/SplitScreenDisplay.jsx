import { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreenDisplay({ children, left, right, bgColor }) {
  const [stillPane, scrollPane] = children;
  const [isEnter, setIsEnter] = useState(false);
  return (
    <>
      {right && (
        <div className="container">
          <div className="pane">{stillPane}</div>

          <div className="pane"></div>

          <div
            style={{ backgroundColor: bgColor }}
            className={`pane ${
              right && isEnter ? "scroll-pane-right" : "still-pane-right"
            }`}
          >
            {scrollPane}

            <button className="btn" onClick={() => setIsEnter(true)}>
              Enter
            </button>
          </div>
        </div>
      )}
      {left && (
        <div className="container">
          <div
            style={{ backgroundColor: bgColor }}
            className={`pane ${
              left && isEnter ? "scroll-pane-left" : "still-pane-left"
            } `}
          >
            {scrollPane}

            <button className="btn" onClick={() => setIsEnter(true)}>
              Enter
            </button>
          </div>

          <div className="pane"></div>

          <div className="pane">{stillPane}</div>
        </div>
      )}
    </>
  );
}
