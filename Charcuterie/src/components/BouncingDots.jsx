// BouncingDots.js
import React, { useRef, useEffect } from "react";

const BouncingDots = ({ containerWidth, containerHeight }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const dots = Array.from({ length: 10 }, (_, index) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.style.backgroundColor = `rgb(${Math.random() * 255}, ${
        Math.random() * 255
      }, ${Math.random() * 255})`;
      container.appendChild(dot);

      const speed = Math.random() * 2 + 1;
      const angle = Math.random() * 2 * Math.PI;
      const dx = speed * Math.cos(angle);
      const dy = speed * Math.sin(angle);

      return { dot, dx, dy };
    });

    const animateDots = () => {
      dots.forEach((dot) => {
        dot.dot.style.transform = `translate(${dot.dx}px, ${dot.dy}px)`;

        if (dot.dx < 0 || dot.dx + dot.dot.offsetWidth > containerWidth) {
          dot.dx = -dot.dx;
        }

        if (dot.dy < 0 || dot.dy + dot.dot.offsetHeight > containerHeight) {
          dot.dy = -dot.dy;
        }

        dot.dx += Math.random() - 0.5;
        dot.dy += Math.random() - 0.5;
      });

      requestAnimationFrame(animateDots);
    };

    animateDots();

    return () => {
      dots.forEach((dot) => {
        container.removeChild(dot.dot);
      });
    };
  }, [containerWidth, containerHeight]);

  return <div ref={containerRef} className="dots-container" />;
};

export default BouncingDots;
