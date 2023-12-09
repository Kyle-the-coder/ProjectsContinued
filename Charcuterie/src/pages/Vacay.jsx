import vacay from "../assets/vacation.jpg";

export function Vacay() {
  return (
    <div className="vacay-container">
      <div className="vacay-bg-container">
        <img className="vacay-bg-img" src={vacay} />
      </div>
      <div className="vacay-display"></div>
    </div>
  );
}
