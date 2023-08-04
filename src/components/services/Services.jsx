import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EcommerceImg from "../../assets/Image/ecommerce.png";
import { Col, Container, Row } from "react-bootstrap";
const Services = () => {
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center underline position-relative">Services</h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={4} md={6} sm={12}>
          <div className="mt-4">
            <Card className="text-center py-3 shadow-md">
              <div>
                <img src={EcommerceImg} alt="" className="serviceIcon" />
              </div>
              <Card.Body>
                <Card.Title className="text-capitalize service_card_title">
                  Ecommerce
                </Card.Title>
                <Card.Text className="descr">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="mt-4">
            <Card className="text-center py-3 shadow-md ">
              <div>
                <img src={EcommerceImg} alt="" className="serviceIcon" />
              </div>
              <Card.Body>
                <Card.Title className="text-capitalize service_card_title">
                  web design
                </Card.Title>
                <Card.Text className="descr">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <div className="mt-4">
            <Card className="text-center py-3 shadow-md">
              <div>
                <img src={EcommerceImg} alt="" className="serviceIcon" />
              </div>
              <Card.Body>
                <Card.Title className="text-capitalize service_card_title">
                  web development
                </Card.Title>
                <Card.Text className="descr">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
