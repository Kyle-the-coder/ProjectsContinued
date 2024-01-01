import { Outlet, useNavigation } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

export function ErrorLayout() {
  return (
    <div className="main-container">
      <Navbar />
      <h1 style={{ marginTop: "180px" }}>Error</h1>
      <ContactUs />
      <NewsLetter />
    </div>
  );
}
