import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export function ErrorLayout() {
  return (
    <div className="main-container">
      <Navbar />
      <h1>Error</h1>
    </div>
  );
}
