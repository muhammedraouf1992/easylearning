import React, { createRef, useEffect, useRef, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";
import Counter from "../counter/Counter";

const Summary = () => {
  const [student, setStudent] = useState(0);
  const [courses, setcourses] = useState(0);
  const [reviews, setReviews] = useState(0);
  const studentValue = 35000;
  const coursesValues = 2200;
  const reviewsValue = 3000;
  const ref = useRef(0);
  const containerRef = useRef();

  return (
    <Container fluid={true} className="summaryBanner my-5" ref={containerRef}>
      <Row>
        <Col lg={8} md={12} sm={8}>
          <Row className="mt-5">
            <Col>
              {/* <div className="text-white text-center text-capitalize d-flex flex-column align-items-center">
                <BsGlobe2 className="fs-1" />
                <h1 className="counter mt-2">{student}</h1>
                <p className="counter-subtitle">students worldwide</p>
                <div className="line"></div>
              </div> */}
              <Counter value={35000} subtitle={"students worldwide"} />
            </Col>
            <Col>
              <Counter value={22} subtitle={"Courses Published"} />
            </Col>
            <Col>
              <Counter value={3000} subtitle={"students Reviews"} />
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={12} sm={12} className="mt-5">
          <Card>
            <Card.Body>
              <Card.Title className="text-capitalize">
                what i have achieved
              </Card.Title>
              <Card.Text>
                <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
              </Card.Text>
              <Card.Text>
                <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
              </Card.Text>
              <Card.Text>
                <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
              </Card.Text>
              <Card.Text>
                <AiFillCheckSquare /> Lorem ipsum, dolor sit amet consectetur
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
