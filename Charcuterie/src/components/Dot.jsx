import React from "react";

const Dot = ({ x, y }) => {
  return <div className="dot" style={{ left: `${x}px`, top: `${y}px` }} />;
};

export default Dot;
