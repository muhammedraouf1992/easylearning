import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import CoursesPage from "./pages/CoursesPage";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutme",
    element: <AboutMePage />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetailsPage />,
  },
  {
    path: "/courses/:id",
    element: <CourseDetailsPage />,
  },
]);
export default router;
