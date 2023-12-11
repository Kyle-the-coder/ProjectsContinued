import { useEffect, useState } from "react";
import vacay from "../assets/vacation.jpg";

export function Vacay() {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!firstLoad) {
        setFirstLoad(true);
      }
    }, 1000);
  }, [firstLoad]);
  return (
    <div className="vacay-container">
      <div className="vacay-bg-container">
        <img className="vacay-bg-img" src={vacay} />
      </div>
      <div className="vacay-display">
        <h3 className={`vacay-display-text ${firstLoad && "active"}`}>
          WELCOME TO
        </h3>
        <h1 className={`vacay-display-text ${firstLoad && "active"}`}>
          The WellHall
        </h1>
        <h2 className={`vacay-display-text ${firstLoad && "active"}`}>
          Resort & Spa Hotel
        </h2>
        <button className="vacay-button" onClick={() => setFirstLoad(false)}>
          Reset
        </button>
      </div>
    </div>
  );
}
