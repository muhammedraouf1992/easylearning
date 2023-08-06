import React, { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TopBanner = () => {
  return (
    <Container
      fluid={true}
      className="topBanner d-flex justify-content-center align-items-center mt-5"
    >
      <Row className=" text-center text-white">
        <Col className="">
          <h1 className="text-uppercase title">easy learning</h1>
          <h4 className="text-capitalize fs-5 my-3">learn professionally</h4>
          <Button variant="primary" className="mt-2">
            Learn More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBanner;
