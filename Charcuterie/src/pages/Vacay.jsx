import vacay from "../assets/vacation.jpg";

export function Vacay() {
  return (
    <div className="vacay-container">
      <div className="vacay-bg-container">
        <img className="vacay-bg-img" src={vacay} />
      </div>
      <div className="vacay-display">
        <h3 className="vacay-display-text">WELCOME TO</h3>
        <h1 className="vacay-display-text">The WellHall</h1>
        <h2 className="vacay-display-text">Resort & Spa Hotel</h2>
      </div>
    </div>
  );
}
