import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AiFillCheckSquare } from "react-icons/ai";
import Loading from "../loading/Loading";

const ProjectDetails = ({ data, loading }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="project_img">
            <img src={`../../src/${data.image_two}`} alt="" />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="p-5">
          <h1 className="c_heading">{data.project_name}</h1>
          <p className="descr">{data.project_description}</p>
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
