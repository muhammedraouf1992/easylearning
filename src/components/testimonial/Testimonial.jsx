import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loading from "../loading/Loading";
import Error from "../error/Error";
const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://easylearning.byethost5.com/api/reviews/`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(({ response }) => {
        setErrors(response.data.message);
        setLoading(false);
      });
  }, []);
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
  if (errors) {
    return <Error error={errors} />;
  }
  if (loading) {
    return <Loading />;
  }
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
          {data.map((d) => (
            <div key={d.id}>
              <Row className="text-center justify-content-center" key={d.id}>
                <Col lg={6} md={6} sm={12}>
                  <div className="d-flex justify-content-center">
                    <img
                      className="circle-img"
                      src={`https://easylearning.byethost5.com/${d.client_image}/`}
                    />
                  </div>

                  <h2 className="name">{d.client_title}</h2>
                  <p className="descr text-white">{d.client_description}</p>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Row>
    </Container>
  );
};

export default Testimonial;
