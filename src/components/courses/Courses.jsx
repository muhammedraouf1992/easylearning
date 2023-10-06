import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import Error from "../error/Error";
const Courses = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/courses`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(({ response }) => {
        setErrors(response.data.message);
        setLoading(false);
      });
  }, []);
  if (errors) {
    return <Error error={errors} />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center underline position-relative">
            All Courses
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        {data.map((d) => (
          <Col lg={6} md={12} sm={12} key={d.id}>
            <Row className="align-items-center">
              <Col lg={6} md={12} sm={12}>
                <div className="justify-content-end">
                  <img
                    src={`http://127.0.0.1:8000/${d.short_image}`}
                    alt=""
                    style={{ width: "70%" }}
                    className="p-2"
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12} className="mt-2">
                <h5 className="text-justify sub-title">{d.short_title} </h5>
                <p className="text-justify descr">{d.short_description}</p>
                <Link
                  className="courseViewMore float-left"
                  to={"/courses/" + d.id}
                >
                  View Details
                </Link>
              </Col>
            </Row>
          </Col>
        ))}

        {/* <Col lg={6} md={12} sm={12}>
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
              <Link className="courseViewMore float-left" to="/course_details">
                View Details
              </Link>
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
        </Col> */}
      </Row>
    </Container>
  );
};

export default Courses;
