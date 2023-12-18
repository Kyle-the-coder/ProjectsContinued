import fashion from "../assets/fashoin.jpeg";
import { gsap } from "gsap";
export function Shop() {
  return (
    <div className="shop-main-container">
      <div className="shop-left-container">
        <h1>This is fashoin!</h1>
      </div>
      <div className="shop-right-container">
        <img src={fashion} className="shop-right-img" />
      </div>
    </div>
  );
}
