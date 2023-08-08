import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import CourseDetails from "../components/courseDetails/CourseDetails";
import Footer from "../components/footer/Footer";

const CourseDetailsPage = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"course details"} />
      <CourseDetails />
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
