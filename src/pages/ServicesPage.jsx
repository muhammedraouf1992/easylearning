import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import ContactUs from "../components/contactUs/ContactUs";
import Services from "../components/services/Services";
import Footer from "../components/footer/Footer";

const ServicesPage = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"My services"} />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ServicesPage;
