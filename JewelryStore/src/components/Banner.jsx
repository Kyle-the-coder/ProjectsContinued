import { useState } from "react";
import "../styles/banner.css";

export default function Banner({ img, title, desc, side, position }) {
  const [leftOrRight, setLeftOrRight] = useState(side);

  return (
    <div className="banner-main-container">
      <img
        className="banner-img"
        src={img}
        style={{ objectPosition: position }}
      />

      <div
        className={`${
          leftOrRight
            ? "banner-info-container-left"
            : "banner-info-container-right"
        }`}
      >
        <h1 className="banner-info">{title}</h1>
        <p className="banner-info">{desc}</p>
      </div>
    </div>
  );
}
