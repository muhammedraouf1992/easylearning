import React, { useEffect } from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"all projects"} />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
