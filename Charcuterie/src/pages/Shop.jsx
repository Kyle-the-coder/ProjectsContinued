import fashion from "../assets/fashion3.jpg";
export function Shop() {
  return (
    <div className="shop-main-container">
      <div className="shop-left-container">
        <h1>This is fashoin!</h1>
      </div>
      <div className="shop-right-container">
        <div className="shop-right-top-img-container">
          <img src={fashion} className="shop-right-top-img" />
        </div>
        <div className="shop-right-bottom-img-container">
          <img src={fashion} className="shop-right-bottom-img" />
        </div>
      </div>
    </div>
  );
}
