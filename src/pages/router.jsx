import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AboutMePage from "./AboutMePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutme",
    element: <AboutMePage />,
  },
]);
export default router;
