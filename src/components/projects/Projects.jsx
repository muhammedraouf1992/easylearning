import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Projects = () => {
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center underline position-relative">
            My projects
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={4} md={6} sm={12} className="project-card shadow-md mt-2">
          <Card className="project_card">
            <Card.Img
              variant="top"
              src="https://image.freepik.com/free-photo/shocked-male-student-poses-desktop-home-office-uses-laptop-computer-searching-online-education-course-browses-distance-learning-website_273609-34548.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="project-card shadow-md mt-2 ">
          <Card className="project_card">
            <Card.Img
              variant="top"
              src="https://image.freepik.com/free-photo/training-managers_1098-16067.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12} className="project-card shadow-md mt-2">
          <Card className="project_card">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/people-work-together-modern-office-as-teamwork-partner-double-exposure_207634-10822.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
