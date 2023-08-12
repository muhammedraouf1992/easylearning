import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import courseImg from "../../assets/Image/summary.jpg";
import { AiFillCheckSquare } from "react-icons/ai";
import { useParams } from "react-router-dom";
const CourseDetails = () => {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/courses/${params.id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={8} md={12} sm={12}>
          <h1 className="c_heading">{data.long_title}</h1>
          <div>
            <img src={data.short_image} alt="" />
          </div>
          <p className="descr mt-3">{data.long_description}</p>
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
                {data.student} students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>duration: </span>
                {data.duration} students
              </li>
              <li>
                <AiFillCheckSquare />
                <span>lectures: </span>
                {data.lectures} students
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
