import React, { useEffect, useState } from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetailsPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/projects/${params.id}`)
      .then((response) => {
        setData(response.data);
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
      <AboutBanner pageTitle={data.project_name} />
      <ProjectDetails data={data} loading={loading} errors={errors} />
      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
