import React, { useState } from "react";
import "../styles/splitScreen.css";

export default function SplitScreenDisplay({
  children,
  left,
  right,
  bgColorEnd,
  bgColorBeg,
}) {
  const [slidablePane, stillPane] = children;
  const [isEnter, setIsEnter] = useState(false);

  return (
    <>
      {right && (
        <div className="container">
          <div className="pane">{stillPane}</div>
          <div className="pane"></div>

          <div
            style={{ backgroundColor: isEnter ? bgColorEnd : bgColorBeg }}
            className={`pane ${
              right && isEnter ? "scroll-pane-right" : "still-pane-right"
            } ${
              bgColorEnd === "rgb(5, 5, 5)" && isEnter
                ? "text-white"
                : "text-black"
            } `}
          >
            {slidablePane}

            <button className="btn" onClick={() => setIsEnter(!isEnter)}>
              {isEnter ? "Close" : "View"}
            </button>
          </div>
        </div>
      )}
      {left && (
        <div className="container">
          <div
            style={{ backgroundColor: isEnter ? bgColorEnd : bgColorBeg }}
            className={`pane ${
              left && isEnter ? "scroll-pane-left" : "still-pane-left"
            }  ${
              bgColorEnd === "gold" && isEnter ? "text-black" : "text-white"
            }  `}
          >
            {slidablePane}

            <button className="btn" onClick={() => setIsEnter(!isEnter)}>
              {isEnter ? "Close" : "View"}
            </button>
          </div>

          <div className="pane"></div>
          <div className="pane">{stillPane}</div>
        </div>
      )}
    </>
  );
}
