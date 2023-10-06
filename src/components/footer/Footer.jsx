import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram, AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import {
  BsFacebook,
  BsFillPinMapFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Loading from "../loading/Loading";
import Error from "../error/Error";
const Footer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://easylearning.byethost5.com/api/footer/")
      .then(({ data }) => {
        setData(data[0]);
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
    <div>
      <Container
        fluid={true}
        className="mt-5 text-white text-capitalize text-center footer_container"
      >
        <Row className="pt-3">
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">follow us</h2>
            <div className="d-flex gap-3 justify-content-center social">
              <a href={data.facebook} className="footer_links text-white">
                <BsFacebook />
              </a>
              <a href={data.youtube} className="footer_links text-white">
                <BsYoutube />
              </a>
              <a href={data.twitter} className="footer_links text-white">
                <BsTwitter />
              </a>
              <a href="#" className="footer_links text-white">
                <AiFillInstagram />
              </a>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">address</h2>
            <div className="footerDescription">
              <p>
                <BsFillPinMapFill className="mx-2" />
                {data.address}
              </p>
              <p>
                <AiTwotoneMail className="mx-2" />
                Email : {data.email}
              </p>
              <p>
                <AiTwotonePhone className="mx-2" />
                Phone : {data.phone}
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">information</h2>
            <a className="footer_links d-block my-2" href="#">
              About Me
            </a>
            <a className="footer_links d-block my-2" href="#">
              Company Profile
            </a>
            <a className="footer_links d-block my-2" href="#">
              Contact Us
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="mt-4">
            <h2 className="mb-3 footer_title">policy</h2>
            <a className="footer_links d-block my-2" href="#">
              Fefund Policy
            </a>
            <a className="footer_links d-block my-2" href="#">
              Trems And Condition
            </a>
            <a className="footer_links d-block my-2" href="#">
              Privaci Policy
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid={true} className="copyrights py-3 text-center">
        <a className="copyrightlink  " href="#">
          {data.copyright}
        </a>
      </Container>
    </div>
  );
};

export default Footer;
