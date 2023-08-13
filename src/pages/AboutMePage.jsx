import React, { useEffect } from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutMe from "../components/aboutMe/AboutMe";
import Footer from "../components/footer/Footer";
import AboutDescription from "../components/aboutDescription/AboutDescription";
import AboutBanner from "../components/aboutBanner/AboutBanner";

const AboutMePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
