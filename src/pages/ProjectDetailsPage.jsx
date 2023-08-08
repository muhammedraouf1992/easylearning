import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Footer from "../components/footer/Footer";

const ProjectDetailsPage = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"project details"} />
      <ProjectDetails />
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
