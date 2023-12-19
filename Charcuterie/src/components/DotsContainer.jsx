import React, { useState, useEffect } from "react";
import Dot from "./Dot";
import "./DotsContainer.css";

const DotsContainer = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numberOfDots = 50; // Adjust as needed
    const initialDots = Array.from({ length: numberOfDots }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2, // Random horizontal speed
      speedY: (Math.random() - 0.5) * 2, // Random vertical speed
    }));

    setDots(initialDots);

    const updateDots = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => ({
          ...dot,
          x: dot.x + dot.speedX,
          y: dot.y + dot.speedY,
          // Bounce off the edges
          speedX:
            dot.x + dot.speedX < 0 || dot.x + dot.speedX > window.innerWidth
              ? -dot.speedX
              : dot.speedX,
          speedY:
            dot.y + dot.speedY < 0 || dot.y + dot.speedY > window.innerHeight
              ? -dot.speedY
              : dot.speedY,
        }))
      );
    };

    const animationFrame = requestAnimationFrame(() => {
      updateDots();
      animationFrame();
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="dots-container">
      {dots.map((dot, index) => (
        <Dot key={index} x={dot.x} y={dot.y} />
      ))}
    </div>
  );
};

export default DotsContainer;
