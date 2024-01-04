import { useEffect, useRef } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import ContactUs from "../components/pageDesign/ContactUs";
import { Footer } from "../components/pageDesign/Footer";
import Navbar from "../components/pageDesign/Navbar";
import NewsLetter from "../components/pageDesign/NewsLetter";

export function NavLayout() {
  const { state } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();
  const outletRef = useRef(null);

  const handleLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (outletRef.current) {
      outletRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);
  return (
    <div className="main-container">
      <Navbar onLinkClick={handleLinkClick} />
      {state === "loading" ? (
        "loading..."
      ) : (
        <div ref={outletRef}>
          <Outlet />
        </div>
      )}
      <ContactUs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
