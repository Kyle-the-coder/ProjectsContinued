import "../../styles/designerdisplay.css";

import { useState } from "react";
export default function DesignerDisplay({
  name,
  desc,
  bigImg,
  productList,
  top,
  bottom,
}) {
  const [designerName, setDesignerName] = useState(name);

  return (
    <div
      className={`${
        top
          ? "designer-display-main-container top"
          : "designer-display-main-container"
      }  ${
        bottom
          ? "designer-display-main-container bottom"
          : "designer-display-main-container"
      }`}
    >
      <div className="designer-display-top-container">
        <div className="designer-display-left-top">
          <h1 className="font4 f2 m0">{name}</h1>
          <p>{desc}</p>
        </div>
        <div className="designer-display-right-top">
          <div className="designer-display-img-container">
            <img src={bigImg} className="designer-display-img" />
          </div>
        </div>
      </div>
      <div className="designer-display-mid-container">
        {productList.map((prod) => {
          return (
            <div
              className="designer-display-product-container"
              key={prod.prodImg}
            >
              <div className="designer-product-img">
                <img src={prod.prodImg} />
              </div>
              <div className="designer-product-display">
                <h3 className="product-text">{prod.prodName}</h3>
                <p className="product-text">{prod.prodPrice}</p>
              </div>
              <button className="product-button ">Inuire Now</button>
            </div>
          );
        })}
      </div>
      <div className="designer-display-bottom-container">
        <button className="form-button gold">
          View all {designerName}'s Products
        </button>
      </div>
    </div>
  );
}
