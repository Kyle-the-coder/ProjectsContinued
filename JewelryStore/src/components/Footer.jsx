import "../styles/footer.css";
import insta from "../assets/instagram2.png";
import fb from "../assets/facebook2.png";
import diamond from "../assets/diamond.png";
import diamondA from "../assets/diamond-award.png";
import trophy from "../assets/trophy.png";
export function Footer() {
  const footerLinks = [
    { linkName: "Our Company", link: "/company" },
    { linkName: "Blog", link: "/blog" },
    { linkName: "Reviews", link: "/reviews" },
    { linkName: "Contact Us", link: "/contact" },
  ];
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <h3 className="text-center font4 f2">The Timothy Patrick Difference</h3>
        <p className="text-center m0 font2 f-8">
          We embrace the principles of the American Gem Society where business
          ethics and professionalism are a key measure of success.
        </p>
        <div className="footer-award-container">
          <img src={diamond} className="footer-png" />
          <img src={diamondA} className="footer-png" />
          <img src={trophy} className="footer-png" />
        </div>
      </div>
      <div className="footer-container">
        <h3 className="font1">Explore</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => {
            return (
              <li className={link.linkName}>
                <a className="footer-link" href={link.link}>
                  {link.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-container">
        <h3 className="font1">Locations:</h3>
        <p className="font1 text-center">
          647 4th St, Santa Rosa, CA 95404
        </p>{" "}
        <p className="font1 text-center">647 4th St, Santa Rosa, CA 95404</p>{" "}
      </div>
      <div className="footer-container">
        <h3 className="font1">Follow</h3>
        <div className="footer-socials-container">
          <img src={insta} width="25" />
          <img src={fb} width="25" />
        </div>
      </div>
    </div>
  );
}
