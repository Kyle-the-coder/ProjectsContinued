import Banner from "../components/pageDesign/Banner";
import tripleRing from "../assets/triple-ring-display.jpg";
import { productInfo } from "../api/product";
import "../styles/jewelrypage.css";
import { useEffect, useState } from "react";
import Loader from "../components/display/loader";
function JewelryPage() {
  const [prodInfo, setProdInfo] = useState(productInfo);
  const [productGrid, setProductGrid] = useState(prodInfo);
  const [materialSearch, setMaterialSearch] = useState("");
  const [typeSearch, setTypeSearch] = useState("");
  const [minSearch, setMinSearch] = useState(null);
  const [maxSearch, setMaxSearch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const applyFilters = () => {
      let filteredData = productInfo;

      // Jewelry Type filter
      if (typeSearch === "necklace") {
        filteredData = filteredData.filter((prod) =>
          prod.description.includes("necklace")
        );
      } else if (typeSearch === "ring") {
        filteredData = filteredData.filter((prod) =>
          prod.description.includes("ring")
        );
      }

      // Material filter
      if (materialSearch === "gold") {
        filteredData = filteredData.filter((prod) =>
          prod.description.includes("gold")
        );
      } else if (materialSearch === "silver") {
        filteredData = filteredData.filter((prod) =>
          prod.description.includes("silver")
        );
      }

      // Min and max price filters
      if (minSearch) {
        filteredData = filteredData.filter(
          (prod) => parseFloat(prod.prodPrice) >= parseFloat(minSearch)
        );
        filteredData.sort((a, b) => a.prodPrice - b.prodPrice);
      }

      if (maxSearch) {
        filteredData = filteredData.filter(
          (prod) => parseFloat(prod.prodPrice) <= parseFloat(maxSearch)
        );
      }

      setProductGrid(filteredData);
    };
    applyFilters();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [materialSearch, minSearch, maxSearch, productInfo, typeSearch]);

  return (
    <div className="jewelry-main-container">
      <Banner
        img={tripleRing}
        title="Jewelry"
        desc="Indulge in our curated collection of meticulously handcrafted and thoughtfully designed jewelry, crafted with passion and precision to capture the essence of heartfelt beauty."
        side={true}
        position="0 47%"
      />
      <div className="jewelry-filter-main-container">
        <div className="jewelry-filter-container">
          <label className="font2 f-8">Min Price</label>
          <input
            type="number"
            min="0"
            className="input-field small"
            onChange={(e) => setMinSearch(e.target.value)}
          />
        </div>
        <div className="jewelry-filter-container">
          <label className="font2 f-8">Max Price</label>
          <input
            type="number"
            min="0"
            className="input-field small"
            onChange={(e) => setMaxSearch(e.target.value)}
          />
        </div>
        <div className="jewelry-filter-container select">
          <label className="font2 f-8">Brand</label>
          <select className="input-field small">
            <option>Select One...</option>
            <option>Dove</option>
            <option>Seafoam</option>
            <option>Hearts of Fire</option>
          </select>
        </div>
        <div className="jewelry-filter-container select">
          <label className="font2 f-8">Jewelry Type</label>
          <select
            className="input-field small"
            onChange={(e) => setTypeSearch(e.target.value)}
          >
            <option>Select One...</option>
            <option value="all">All</option>
            <option value="necklace">Necklace</option>
            <option value="ring">Rings</option>
          </select>
        </div>
        <div className="jewelry-filter-container select">
          <label className="font2 f-8">Material</label>
          <select
            className="input-field small"
            onChange={(e) => {
              setMaterialSearch(e.target.value);
            }}
          >
            <option>Select One...</option>
            <option value="all">All</option>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="loader-main-container">
          <Loader />
        </div>
      ) : (
        <div className="grid-main-container">
          <div className="img-grid">
            {productGrid.map((prod, index) => {
              return (
                <div
                  className="designer-display-product-container big"
                  key={prod.prodImg}
                >
                  <div className="designer-product-img">
                    <img src={prod.prodImg} />
                  </div>
                  <div className="designer-product-display">
                    <h3 className="product-text">{prod.prodName}</h3>
                    <p className="product-text">{`$${prod.prodPrice}`}</p>
                  </div>
                  <button className="product-button ">Inuire Now</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export const jewelryRoute = {
  element: <JewelryPage />,
};
