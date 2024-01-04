import { Outlet, useNavigation } from "react-router-dom";
import ContactUs from "../components/pageDesign/ContactUs";
import { Footer } from "../components/pageDesign/Footer";
import Navbar from "../components/pageDesign/Navbar";
import NewsLetter from "../components/pageDesign/NewsLetter";

export function ErrorLayout() {
  return (
    <div className="main-container">
      <Navbar />
      <h1 style={{ marginTop: "180px" }}>Error</h1>
      <ContactUs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
