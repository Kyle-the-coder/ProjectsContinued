import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export function NavLayout() {
  const { state } = useNavigation();
  return (
    <>
      <Navbar />
      {state === "loading" ? "loading..." : <Outlet />}
    </>
  );
}
