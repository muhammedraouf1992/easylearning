import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import Loading from "../loading/Loading";
const Services = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/services")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center underline position-relative">Services</h1>
        </div>
      </Row>
      <Row className="mt-5">
        {data.map((d) => (
          <Col lg={4} md={6} sm={12} key={d.id}>
            <div className="mt-4">
              <Card className="text-center py-3 shadow-md">
                <div>
                  <img
                    src={`../../src/${d.service_image}`}
                    alt=""
                    className="serviceIcon"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="text-capitalize service_card_title">
                    {d.service_name}
                  </Card.Title>
                  <Card.Text className="descr">
                    {d.service_description}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
