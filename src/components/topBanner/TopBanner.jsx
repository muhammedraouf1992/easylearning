import React, { Fragment } from "react";
// import { Container } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const TopBanner = () => {
  return (
    <>
      <Container
        fluid={true}
        className="topBanner d-flex justify-content-center align-items-center"
      >
        <div className="topBannerOverlay"></div>
        <Row className=" text-center text-white">
          <Col className="d-flex justify-content-center  flex-column">
            <h1 className="text-capitalize">easy learning</h1>
            <h4>learn professionally</h4>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TopBanner;
