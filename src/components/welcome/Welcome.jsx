import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Img1 from "../../assets/Image/page1.png";
import Img2 from "../../assets/Image/page2.png";
import Img3 from "../../assets/Image/page3.png";
import Side1 from "../../assets/Image/19.png";
import Side2 from "../../assets/Image/20.png";
import Side3 from "../../assets/Image/21.png";
const Welcome = () => {
  return (
    <Container className="shadow-lg rounded welcome_container">
      <div className="p-5">
        <Row>
          <div className="">
            <p className="text-center welcome_title position-relative">
              welcome
            </p>
            <h1 className="text-center welcome_heading">
              an extraordinary <br />
              learning community
            </h1>
          </div>
        </Row>
        <Row className="margin_top">
          <Col lg={4} md={6} sm={12} className="text-center p-3">
            <div className="c_img">
              <img src={Img1} alt="" />
            </div>
            <h4 className="c_heading">easy as it gets</h4>
            <p className="c_subheading">Lorem ipsum dolor sit.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center p-3">
            <div className="c_img">
              <img src={Img2} alt="" />
            </div>
            <h4 className="c_heading">easy as it gets</h4>
            <p className="c_subheading">Lorem ipsum dolor sit.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center p-3">
            <div className="c_img">
              <img src={Img3} alt="" />
            </div>
            <h4 className="c_heading">easy as it gets</h4>
            <p className="c_subheading">Lorem ipsum dolor sit.</p>
          </Col>
        </Row>
      </div>
      <Row className="welcome_footer_container px-3 py-2">
        <Col lg={4} md={12} sm={12}>
          <Row className="align-items-center justify-content-center">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="p-5 d-flex justify-content-center "
            >
              <img src={Side1} alt="" className="w-100 welcome_sm_img" />
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center ">
              <h4 className="c_heading">easy as it gets</h4>
              <p className="c_subheading">Lorem ipsum dolor sit.</p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Row className="align-items-center">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="p-5 d-flex justify-content-center"
            >
              <img src={Side2} alt="" className="w-100 welcome_sm_img" />
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center ">
              <h4 className="c_heading">easy as it gets</h4>
              <p className="c_subheading">Lorem ipsum dolor sit.</p>
            </Col>
          </Row>
        </Col>
        <Col lg={4} md={12} sm={12}>
          <Row className="align-items-center">
            <Col
              lg={6}
              md={6}
              sm={12}
              className="p-5 d-flex justify-content-center "
            >
              <img src={Side3} alt="" className="w-100 welcome_sm_img" />
            </Col>
            <Col lg={6} md={6} sm={12} className="text-center ">
              <h4 className="c_heading">easy as it gets</h4>
              <p className="c_subheading">Lorem ipsum dolor sit.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
