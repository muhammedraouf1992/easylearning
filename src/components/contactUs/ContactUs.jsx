import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import "../../App.css";
const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center text-capitalize underline position-relative">
            Contact us
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={6} md={6} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Name</Form.Label>
              <Form.Control type="text" placeholder="Your fullname" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="">Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h2 className="mb-3 footer_title text-capitalize">address</h2>
          <div className="footerDescription">
            <p>
              <BsFillPinMapFill className="mx-2" />
              6522 Baltimore National Pike CatonsVille, Califonia USA
            </p>
            <p>
              <AiTwotoneMail className="mx-2" />
              Email : Support@ele.com
            </p>
            <p>
              <AiTwotonePhone className="mx-2" />
              Phone : 434343434
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
