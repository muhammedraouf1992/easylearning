import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Courses = () => {
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center underline position-relative">Services</h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={6} md={12} sm={12}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <img
                src="https://image.freepik.com/free-photo/coach-by-whiteboard_1098-12970.jpg"
                alt=""
                style={{ width: "100%" }}
                className="p-2"
              />
            </Col>
            <Col lg={6} md={12} sm={12} className="mt-2">
              <h5 className="text-justify sub-title">Laravel 8 </h5>
              <p className="text-justify descr">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="courseViewMore float-left" href="#">
                View Details
              </a>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <img
                src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg"
                alt=""
                style={{ width: "100%" }}
                className="p-2"
              />
            </Col>
            <Col lg={6} md={12} sm={12} className="mt-2">
              <h5 className="text-justify sub-title">Laravel 8 </h5>
              <p className="text-justify descr">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="" href="#">
                View Details
              </a>
            </Col>
          </Row>
        </Col>

        <Col lg={6} md={12} sm={12}>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <img
                src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                alt=""
                style={{ width: "100%" }}
                className="p-2"
              />
            </Col>
            <Col lg={6} md={12} sm={12} className="mt-2">
              <h5 className="text-justify sub-title">Laravel 8 </h5>
              <p className="text-justify descr">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="courseViewMore float-left" href="#">
                View Details
              </a>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <img
                src="https://image.freepik.com/free-photo/learner-lesson_1098-14155.jpg"
                alt=""
                style={{ width: "100%" }}
                className="p-2"
              />
            </Col>
            <Col lg={6} md={12} sm={12} className="mt-2">
              <h5 className="text-justify sub-title">Laravel 8 </h5>
              <p className="text-justify descr">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a className="courseViewMore float-left" href="#">
                View Details
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
