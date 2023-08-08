import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoblack from "../../assets/Image/logo_black.png";
import logoWhite from "../../assets/Image/logo_white.png";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  function onScroll() {
    if (window.scrollY > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  window.addEventListener("scroll", onScroll);

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg={`${scrolled ? "light" : "dark"} `}
      data-bs-theme={`${scrolled ? "light" : "dark"}`}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={scrolled ? logoblack : logoWhite} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="mobileMenu"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="d-flex gap-2 ">
            <NavLink
              to="/"
              className={`text-uppercase  navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutme"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              service
            </NavLink>
            <NavLink
              to="/courses"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              courses
            </NavLink>
            <NavLink
              to="/portfolio"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              contact us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
