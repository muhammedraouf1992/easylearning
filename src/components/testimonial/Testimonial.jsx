import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Testimonial = () => {
  var settings = {
    autoPlaySpeed: 3000,
    autoPlay: true,
    dots: true,
    infinite: true,
    speed: 3000,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container
      fluid={true}
      className="my-5 videoCard text-white text-center d-flex flex-column justify-content-center align-items-center"
    >
      <Row>
        <div className="">
          <h1 className="text-center text-capitalize underline position-relative">
            Testimonial
          </h1>
        </div>
      </Row>
      <Row className="my-5">
        <Slider {...settings}>
          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <div className="d-flex justify-content-center">
                  <img
                    className="circle-img"
                    src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg"
                  />
                </div>

                <h2 className="name">Kazi Ariyan</h2>
                <p className="descr text-white">
                  Hi! I'm Kazi Ariyan. I'm a web developer with a serious love
                  for teaching I am a founder of eLe easy Learning and a
                  passionate Web Developer, Programmer & Instructor.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <div className="d-flex justify-content-center">
                  <img
                    className="circle-img"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                  />
                </div>

                <h2 className="name">Jack Ma</h2>
                <p className="descr text-white">
                  Hi! I'm Kazi Ariyan. I'm a web developer with a serious love
                  for teaching I am a founder of eLe easy Learning and a
                  passionate Web Developer, Programmer & Instructor.
                </p>
              </Col>
            </Row>
          </div>

          <div>
            <Row className="text-center justify-content-center">
              <Col lg={6} md={6} sm={12}>
                <div className="d-flex justify-content-center">
                  <img
                    className="circle-img"
                    src="https://image.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg"
                  />
                </div>

                <h2 className="name">Jhon </h2>
                <p className="descr text-white">
                  Hi! I'm Kazi Ariyan. I'm a web developer with a serious love
                  for teaching I am a founder of eLe easy Learning and a
                  passionate Web Developer, Programmer & Instructor.
                </p>
              </Col>
            </Row>
          </div>
        </Slider>
      </Row>
    </Container>
  );
};

export default Testimonial;
