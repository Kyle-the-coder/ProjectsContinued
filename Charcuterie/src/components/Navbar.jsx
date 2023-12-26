import { useState } from "react";
import layers from "../assets/layers.png";

export function NavBar({ navOptions }) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [isActive, setIsActive] = useState(false);

  const dropdownOptions = [
    "My Projects",
    "About Me",
    "Photos",
    "Videos",
    "Social Media Statistics",
  ];

  const handleDropdownClick = (option, index) => {
    if (option === "My Portfolio") {
      setIsDropdownActive(true);
      setTimeout(() => {
        setIsActive(true);
      }, 100);

      // Calculate position based on the index and dropdown size
      const dropdownTop = 100; // You can adjust this value based on your design
      const dropdownLeft = index * 66.5; // You can adjust this value based on your design
      setDropdownPosition({ top: dropdownTop, left: dropdownLeft });
    } else {
      setIsDropdownActive(false);
    }
  };

  function handleDropdownReturn() {
    setIsActive(false);
    setTimeout(() => {
      setIsDropdownActive(false);
    }, 600);
  }

  return (
    <>
      <div className={`navbar-container ${isActive ? "active" : ""}`}>
        <div className="navbar-logo-container">
          <img src={layers} className="navbar-logo-display-png" />
          <h3 className="navbar-logo-display-text">
            LAYERS FOR LIVES <span>inc.</span>
          </h3>
        </div>
        <div className="navbar-list-container">
          <ul className="navbar-list-option-container">
            {navOptions.map((option, index) => {
              return (
                <>
                  <li
                    key={option}
                    className="navbar-list-option"
                    onClick={() =>
                      isActive
                        ? handleDropdownReturn()
                        : handleDropdownClick(option, index)
                    }
                  >
                    {option}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      {isDropdownActive ? (
        <div
          className={`navbar-list-dropdown-container ${isActive && "active"}`}
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}%`,
          }}
        >
          <ul className="navbar-list-dropdown-option-container">
            {dropdownOptions.map((option) => {
              return (
                <li key={option} className="navbar-list-dropdown-option">
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}{" "}
    </>
  );
}
