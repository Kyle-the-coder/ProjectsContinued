import fashion from "../assets/fashoin.jpeg";
import logo from "../assets/cap2.png";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export function Shop() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".shop-right-img", {
        xPercent: "-100",
        duration: 1.5,
        delay: 1,
        ease: "slow(0.9,2,false)",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="shop-main-container">
      <div className="shop-left-container">
        <div className="shop-left-logo-container">
          <img src={logo} className="shop-left-logo-png" />
          <p className="shop-left-logo-title">Concrete Chic Boutique Co.</p>
        </div>
        <h1 className="shop-left-title">This is fashoin!</h1>
        <div className="shop-left-clickable-container">
          <button>Enter the Boutique</button>
          <div></div>
        </div>
      </div>
      <div className="shop-right-container">
        <img src={fashion} className="shop-right-img" />
      </div>
    </div>
  );
}
