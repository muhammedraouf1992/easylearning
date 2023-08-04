import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Analysis = () => {
  const data = [
    { Techonology: "PHP", Projects: 100 },
    { Techonology: "MySqli", Projects: 90 },
    { Techonology: "Laravel", Projects: 95 },
    { Techonology: "React", Projects: 85 },
    { Techonology: "Opencart", Projects: 80 },
    { Techonology: "Vue Js", Projects: 70 },
    // { Techonology: "Django", Projects: 60 },
    { Techonology: "JavaScript", Projects: 100 },
  ];
  return (
    <Container className="my-5">
      <Row>
        <div className="">
          <h1 className="text-center text-capitalize underline position-relative">
            Technology used
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={6} md={12} sm={12}>
          <ResponsiveContainer>
            <BarChart width={100} height={100} data={data}>
              <XAxis dataKey="Techonology" stroke="#8884d8" />

              <Tooltip
                wrapperStyle={{ width: 100, backgroundColor: "#8884d8" }}
              />

              <Bar dataKey="Projects" fill="#8884d8" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="descr">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              ipsa labore laborum! Rem repellat hic perspiciatis dolorum soluta
              maiores doloremque sed voluptas impedit quidem. Autem qui itaque
              illum tempora magnam distinctio debitis repudiandae vero dolores
              accusantium consequatur error, eos delectus, perferendis
            </p>
            <p>
              assumenda, animi eligendi id quas atque nisi libero porro
              doloremque. Facilis, obcaecati maxime perferendis corrupti rerum
              fuga cupiditate quod voluptates commodi culpa reprehenderit,
              dolore aliquam dolores facere, fugiat autem in voluptatibus
            </p>
            <p>
              voluptatum earum itaque magnam ea a consequuntur? Possimus ullam
              officiis natus blanditiis dolorum expedita deserunt quidem. Non,
              iure. Reprehenderit quisquam facere dolor, numquam blanditiis
              repudiandae ea necessitatibus voluptates?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Analysis;
