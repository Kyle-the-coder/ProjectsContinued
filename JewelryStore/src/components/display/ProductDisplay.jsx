import "../styles/designerdisplay.css";

export default function PrductDisplay({ prodImg, prodName, prodPrice }) {
  return (
    <div className="designer-display-product-container">
      <div className="designer-product-img">
        <img src={prodImg} />
      </div>
      <div className="designer-product-display">
        <h3 className="product-text">{prodName}</h3>
        <p className="product-text">{prodPrice}</p>
      </div>
      <button className="product-button ">Inuire Now</button>
    </div>
  );
}
