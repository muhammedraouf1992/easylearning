import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Face from "../../assets/Image/face.png";
const AboutMe = () => {
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center text-capitalize underline position-relative">
            About me
          </h1>
        </div>
      </Row>
      <Row className="align-items-center mt-5">
        <Col lg={6} md={12} sm={12}>
          <div className="aboutme-img">
            <img src={Face} alt="" />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="mt-5">
          <div className="text-center">
            <h4 className="aboutme-heading">HI There, I'm</h4>
            <h2 className="aboutme-name">Kazi Ariyan</h2>
            <h3 className="aboutMeDetails">Work as Developer</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
