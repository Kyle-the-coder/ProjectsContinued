import { createBrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import { NavLayout } from "./layouts/NavLayout";
import dualRing from "./assets/dual-ring-display.jpg";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: (
          <Banner
            img={dualRing}
            title="Wedding Rings"
            desc="Find the perfect ring for your love story"
            side={false}
            position="0 50%"
          />
        ),
      },
    ],
  },
]);
