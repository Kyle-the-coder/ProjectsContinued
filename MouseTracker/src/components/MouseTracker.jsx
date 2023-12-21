// MouseTracker.js
import React, { useEffect, useState } from "react";
import "../styles/mousetracker.css";
const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-tracker"
      style={{
        left: mousePosition.x - 14 + "px",
        top: mousePosition.y - 13 + "px",
      }}
    ></div>
  );
};

export default MouseTracker;
