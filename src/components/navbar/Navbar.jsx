import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoblack from "../../assets/Image/logo_black.png";
import logoWhite from "../../assets/Image/logo_white.png";
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
        <Navbar.Brand href="#home">
          <img src={scrolled ? logoblack : logoWhite} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="mobileMenu"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              service
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              courses
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              portfolio
            </Nav.Link>
            <Nav.Link
              href="#deets"
              className={`text-uppercase navbar-links ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
