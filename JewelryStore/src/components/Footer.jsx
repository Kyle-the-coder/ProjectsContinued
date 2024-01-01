import "../styles/footer.css";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
export function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <h3>The Timothy Patrick Difference</h3>
        <p>
          We embrace the principles of the American Gem Society where business
          ethics and professionalism are a key measure of success.
        </p>
      </div>
      <div className="footer-container">
        <h3>Explore</h3>
        <ul>
          <li>Our Community</li>
          <li>Reviews</li>
          <li>Etc.</li>
        </ul>
      </div>
      <div className="footer-container">
        <h3>Locations:</h3>
        <p>647 4th St, Santa Rosa, CA 95404</p>{" "}
        <p>647 4th St, Santa Rosa, CA 95404</p>{" "}
      </div>
      <div className="footer-container">
        <h3>Follow</h3>
        <img src={insta} width="25" />
        <img src={fb} width="25" />
      </div>
    </div>
  );
}
