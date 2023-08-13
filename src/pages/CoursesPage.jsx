import React, { useEffect } from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import Courses from "../components/courses/Courses";
import Footer from "../components/footer/Footer";

const CoursesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"all courses"} />
      <Courses />
      <Footer />
    </div>
  );
};

export default CoursesPage;
