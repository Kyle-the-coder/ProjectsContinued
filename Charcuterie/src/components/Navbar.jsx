import layers from "../assets/layers.png";

export function NavBar({ navOptions }) {
  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src={layers} className="navbar-logo-display-png" />
        <h3 className="navbar-logo-display-text">
          LAYERS FOR LIVES <span>inc.</span>
        </h3>
      </div>
      <div className="navbar-list-container">
        <ul className="navbar-list-option-container">
          {navOptions.map((option) => {
            return <li className="navbar-list-option">{option}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
