import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutBanner = ({ pageTitle }) => {
  return (
    <Container
      fluid={true}
      className="aboutBanner d-flex justify-content-center align-items-center mt-5"
    >
      <Row className=" text-center text-white">
        <Col className="">
          <h1 className="text-capitalize pagetitle">{pageTitle}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutBanner;
