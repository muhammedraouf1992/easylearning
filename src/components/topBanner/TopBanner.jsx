import React, { Fragment, useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { Fade, Bounce, JackInTheBox } from "react-awesome-reveal";
const TopBanner = () => {
  const [home, setHome] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/homePage")
      .then((response) => {
        setHome(response.data[0]);
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
    <Container
      fluid={true}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(../../src/${home.home_image})`,
      }}
      className="topBanner d-flex justify-content-center align-items-center mt-5"
    >
      <Row className=" text-center text-white">
        <Col className="">
          <JackInTheBox cascade>
            <h1 className="text-uppercase title">{home.home_title}</h1>
            <h4 className="text-capitalize fs-5 my-3">{home.home_subtitle}</h4>
            <Button variant="primary" className="mt-2">
              Learn More
            </Button>
          </JackInTheBox>
        </Col>
      </Row>
    </Container>
  );
};

export default TopBanner;
