import { createBrowserRouter } from "react-router-dom";
import Banner from "./components/Banner";
import { NavLayout } from "./layouts/NavLayout";
import dualRing from "./assets/rings-unique-display.jpg";

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
            title="Rings For All"
            desc="Stylish and Attractive rings for the Classy People"
            side={true}
            position="0 47%"
          />
        ),
      },
    ],
  },
]);
