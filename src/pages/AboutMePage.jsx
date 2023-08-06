import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutMe from "../components/aboutMe/AboutMe";
import Footer from "../components/footer/Footer";
import AboutDescription from "../components/aboutDescription/AboutDescription";
import AboutBanner from "../components/aboutBanner/AboutBanner";

const AboutMePage = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"About Me"} />
      <AboutDescription />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default AboutMePage;
