import "../../styles/footer.css";
import insta from "../../assets/instagram2.png";
import fb from "../../assets/facebook2.png";
import diamond from "../../assets/diamond.png";
import diamondA from "../../assets/diamond-award.png";
import trophy from "../../assets/trophy.png";
export function Footer() {
  const footerLinks = [
    { linkName: "Our Company", link: "/company" },
    { linkName: "Blog", link: "/blog" },
    { linkName: "Reviews", link: "/reviews" },
    { linkName: "Contact Us", link: "/contact" },
  ];
  return (
    <div className="footer-main-container">
      <div className="footer-container bigger">
        <h3 className="text-center font4 f2">The Timothy Patrick Difference</h3>
        <p className="text-center mb-5 m0 px-10 font2 f-8">
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
        <h3 className="font1 f-8 mt-15">Explore</h3>
        <ul className="footer-list ">
          {footerLinks.map((link) => {
            return (
              <li key={link.linkName}>
                <a className="footer-link f-8" href={link.link}>
                  {link.linkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="footer-container">
        <h3 className="font1 f-8 mt-15">Locations:</h3>
        <p className="font1 text-center f-8">
          647 4th St, Santa Rosa, CA 95404
        </p>{" "}
        <p className="font1 text-center  f-8">
          647 4th St, Santa Rosa, CA 95404
        </p>{" "}
      </div>
      <div className="footer-container">
        <h3 className="font1  f-8 mt-15">Follow</h3>
        <div className="footer-socials-container">
          <img src={insta} width="25" />
          <img src={fb} width="25" />
        </div>
      </div>
    </div>
  );
}
