import React, { useEffect, useState } from "react";
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
import Welcome from "../components/welcome/Welcome";
import axios from "axios";

const HomePage = () => {
  const [home, setHome] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .request({
        method: "GET",
        url: "http://127.0.0.1:8000/api/homePage/",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setHome(response.data[0]);
        setLoading(false);
      })
      .catch(({ response }) => {
        setErrors(response.data.message);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NavbarComponent />
      <TopBanner home={home} loading={loading} errors={errors} />
      <Welcome />
      <Services />
      <Analysis home={home} />
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
