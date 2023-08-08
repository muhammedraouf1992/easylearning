import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import courseImg from "../../assets/Image/summary.jpg";
import { AiFillCheckSquare } from "react-icons/ai";
const CourseDetails = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={8} md={12} sm={12}>
          <h1 className="c_heading">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div>
            <img src={courseImg} alt="" />
          </div>
          <p className="descr mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            soluta eum facilis consequatur aut magni officiis reiciendis cum
            eius quas voluptas mollitia ex nisi labore placeat earum dignissimos
            omnis sapiente optio ad, sequi quod impedit sint molestias. Corporis
            fugit nemo provident totam ipsam quam eius est. Velit, dolorem quae
            repudiandae et ut excepturi totam perferendis facere corrupti
            voluptatibus modi. Illum?
          </p>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <div className="border py-2">
            <div className="border-bottom text-center py-2">
              <h2>Course Details</h2>
            </div>
            <ul className="my-4">
              <li>
                <AiFillCheckSquare />
                <span className="">Enrolled: </span>
                1200 students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>duration: </span>
                1200 students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>lectures: </span>
                1200 students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>categories: </span>
                1200 students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>tags: </span>
                1200 students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>instructor: </span>
                1200 students
              </li>
            </ul>
            <div className="course_details_footer">
              <p className="">price:$54.00</p>
              <Button variant="warning" className="text-uppercase">
                Enroll Now
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseDetails;
