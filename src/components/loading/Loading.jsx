import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import svg from "../../assets/Image/loader.svg";
const Loading = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <img src={svg} alt="" style={{ width: "150px", height: "150px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
