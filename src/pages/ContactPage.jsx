import React from "react";
import NavbarComponent from "../components/navbar/Navbar";
import AboutBanner from "../components/aboutBanner/AboutBanner";
import ContactUs from "../components/contactUs/ContactUs";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <NavbarComponent />
      <AboutBanner pageTitle={"Contact us"} />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactPage;
