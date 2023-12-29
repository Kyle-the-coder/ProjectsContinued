import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export function ErrorLayout() {
  return (
    <>
      <Navbar />
      <h1>Error</h1>
    </>
  );
}
