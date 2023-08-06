import React from "react";
import Analysis from "../components/analysis/Analysis";
import NavbarComponent from "../components/navbar/Navbar";
import Services from "../components/services/Services";
import TopBanner from "../components/topBanner/TopBanner";
import Summary from "../components/summary/Summary";
import Projects from "../components/projects/Projects";
import Courses from "../components/courses/Courses";
import Video from "../components/video/Video";
import Testimonial from "../components/testimonial/Testimonial";
import AboutMe from "../components/aboutMe/AboutMe";
import Footer from "../components/footer/Footer";
const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <Projects />
      <Courses />
      <Video />
      <Testimonial />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default HomePage;
