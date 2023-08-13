import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import svg from "../../assets/Image/error.svg";
const Error = ({ error }) => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img src={svg} alt="" style={{ width: "150px", height: "150px" }} />
          <h1>
            <small>404 - </small>
            {error}
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
