import { Outlet, useNavigation } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

export function NavLayout() {
  const { state } = useNavigation();
  return (
    <div className="main-container">
      <Navbar />
      {state === "loading" ? "loading..." : <Outlet />}
      <ContactUs />
      <NewsLetter />
    </div>
  );
}
