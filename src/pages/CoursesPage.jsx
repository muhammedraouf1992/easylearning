import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import Courses from "../components/courses/Courses";
import Footer from "../components/footer/Footer";

const CoursesPage = () => {
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
