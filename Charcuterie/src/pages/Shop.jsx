import fashion from "../assets/fashoin.jpeg";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function Shop() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".shop-right-img", {
        xPercent: "-100",
        duration: 1.3,
      });
    });
    return () => ctx.revert();
  }, []);
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
