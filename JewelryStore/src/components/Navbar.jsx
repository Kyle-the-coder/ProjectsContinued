import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-main-container">
      <div className="navbar-info-container">
        <div className="navbar-info-locations">
          <p>Santa Rosa</p>
          <p>Santa Clara</p>
        </div>
        <div className="navbar-info-logo">
          <img />
          <p>Est. 2009</p>
        </div>
        <div className="navbar-info-socials">
          <img />
          <img />
          <img />
        </div>
      </div>
      <div className="navbar-links-container">
        <ul>
          <li>Engagement Rings</li>
          <li>Wedding Rings</li>
          <li>Services</li>
        </ul>
      </div>
    </nav>
  );
}
