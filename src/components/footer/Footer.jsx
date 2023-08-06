import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram, AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import {
  BsFacebook,
  BsFillPinMapFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <Container
        fluid={true}
        className="mt-5 text-white text-capitalize text-center footer_container"
      >
        <Row className="pt-3">
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">follow us</h2>
            <div className="d-flex gap-3 justify-content-center social">
              <a href="#" className="footer_links text-white">
                <BsFacebook />
              </a>
              <a href="#" className="footer_links text-white">
                <BsYoutube />
              </a>
              <a href="#" className="footer_links text-white">
                <BsTwitter />
              </a>
              <a href="#" className="footer_links text-white">
                <AiFillInstagram />
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">address</h2>
            <div className="footerDescription">
              <p>
                <BsFillPinMapFill className="mx-2" />
                6522 Baltimore National Pike CatonsVille, Califonia USA
              </p>
              <p>
                <AiTwotoneMail className="mx-2" />
                Email : Support@ele.com
              </p>
              <p>
                <AiTwotonePhone className="mx-2" />
                Phone : 434343434
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">information</h2>
            <a className="footer_links d-block my-2" href="#">
              About Me
            </a>
            <a className="footer_links d-block my-2" href="#">
              Company Profile
            </a>
            <a className="footer_links d-block my-2" href="#">
              Contact Us
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">policy</h2>
            <a className="footer_links d-block my-2" href="#">
              Fefund Policy
            </a>
            <a className="footer_links d-block my-2" href="#">
              Trems And Condition
            </a>
            <a className="footer_links d-block my-2" href="#">
              Privaci Policy
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="copyrights py-3 text-center">
        <a className="copyrightlink  " href="#">
          © Copyright 2016 by easy Learning, All Rights Reserved
        </a>
      </Container>
    </div>
  );
};

export default Footer;
