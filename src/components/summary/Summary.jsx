import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsGlobe2 } from "react-icons/bs";
import { MdOutlineComputer } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { AiFillCheckSquare } from "react-icons/ai";

const Summary = () => {
  const [student, setStudent] = useState(0);
  const [courses, setcourses] = useState(0);
  const [reviews, setReviews] = useState(0);
  const studentValue = 35000;
  const coursesValues = 22;
  const reviewsValue = 3000;

  function countStudent(number) {
    const c = number / 200; //1750
    if (student < studentValue) {
      setStudent((s) => s + c);
    }
  }
  function countCourses(number) {
    const c = number / 200; //1750
    if (courses < coursesValues) {
      setcourses((s) => Math.ceil(s + c));
    }
  }
  function countReviews(number) {
    const c = number / 200; //1750
    if (reviews < reviewsValue) {
      setReviews((s) => s + c);
    }
  }

  useEffect(() => {
    countStudent(studentValue);
    countReviews(reviewsValue);
    countCourses(coursesValues);
  }, [courses, student, reviews]);
  return (
    <Container fluid={true} className="summaryBanner my-5">
      <Row>
        <Col lg={8} md={12} sm={8}>
          <Row className="mt-5">
            <Col>
              <div className="text-white text-center text-capitalize d-flex flex-column align-items-center">
                <BsGlobe2 className="fs-1" />
                <h1 className="counter mt-2">{student}</h1>
                <p className="counter-subtitle">students worldwide</p>
                <div className="line"></div>
              </div>
            </Col>
            <Col>
              <div className="text-white text-center text-capitalize d-flex flex-column align-items-center">
                <MdOutlineComputer className="fs-1" />
                <h1 className="counter mt-2">{courses}</h1>
                <p className="counter-subtitle">Courses published</p>
                <div className="line"></div>
              </div>
            </Col>
            <Col>
              <div className="text-white text-center text-capitalize d-flex flex-column align-items-center">
                <AiFillStar className="fs-1" />
                <h1 className="counter mt-2">{reviews}</h1>
                <p className="counter-subtitle">student reviews</p>
                <div className="line"></div>
              </div>
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
