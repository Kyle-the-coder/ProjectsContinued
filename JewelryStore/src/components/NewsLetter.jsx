import "../styles/newsletter.css";
import "../styles/main.css";
import logo from "../assets/j-store-logo.jpeg";
export default function NewsLetter() {
  return (
    <div className="newsletter-main-container">
      <div className="newsletter-top-sign-up-container">
        <form className="newsletter-subscribe-form">
          <div style={{ width: "100%" }}>
            <label>Email:</label>
            <input
              placeholder="Sign up for our newsletter"
              type="text"
              className="input-field mt-8"
            />
          </div>
          <button className="form-button">Subscribe</button>
        </form>
      </div>
      <div className="newsletter-bottom-social-posts-container">
        <img src={logo} className="newsletter-logo" />

        <p className="f1-5 font4 m8">Timothy Patrick Jewelers</p>
        <p className="font4 m0 ">Est. 2009</p>
      </div>
    </div>
  );
}
