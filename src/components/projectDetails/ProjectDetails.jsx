import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import projectImg from "../../assets/Image/pdetails.png";
import { AiFillCheckSquare } from "react-icons/ai";
const ProjectDetails = () => {
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className="project_img">
            <img src={projectImg} alt="" />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="p-5">
          <h1 className="c_heading">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <p className="descr">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            iste ea nulla accusantium eos soluta iure cum inventore maiores.
            Iure accusantium maiores hic cupiditate provident nisi deleniti
            exercitationem deserunt accusamus!
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
          <p>
            <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
