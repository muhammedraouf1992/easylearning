import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
const Projects = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/projects`)
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
            My projects
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        {data.map((d) => (
          <Col
            lg={4}
            md={6}
            sm={12}
            className="project-card shadow-md mt-2"
            key={d.id}
          >
            <Card className="project_card">
              <Card.Img variant="top" src={d.image_one} />
              <Card.Body>
                <Card.Title>{d.project_name}</Card.Title>
                <Card.Text>{d.project_description}</Card.Text>
                <Button variant="primary">
                  <Link className="project_links" to={`/projects/${d.id}`}>
                    view more
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
