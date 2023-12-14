import fashion from "../assets/fashion.jpg";
export function Shop() {
  return (
    <div className="shop-main-container">
      <div className="shop-left-container"></div>
      <div className="shop-right-container">
        <img src={fashion} className="shop-right-container-img" />
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
      </div>
    </div>
  );
}
