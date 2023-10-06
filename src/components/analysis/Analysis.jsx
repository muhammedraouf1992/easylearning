import axios from "axios";
import React, { useEffect, useState } from "react";
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
import Loading from "../loading/Loading";
import Error from "../error/Error";

const Analysis = ({ home }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://easylearning.byethost5.com/api/charts`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch(({ response }) => {
        setErrors(response.data.message);
        setLoading(false);
      });
  }, []);

  let analysisData = [];
  data.map((d) => {
    const newObj = { Techonology: d.x_data, Projects: d.y_data };
    analysisData = [...analysisData, newObj];
  });
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
          <h1 className="text-center text-capitalize underline position-relative">
            Technology used
          </h1>
        </div>
      </Row>
      <Row className="mt-5">
        <Col lg={6} md={12} sm={12}>
          <ResponsiveContainer>
            <BarChart width={100} height={100} data={analysisData}>
              <XAxis dataKey="Techonology" stroke="#8884d8" />

              <Tooltip
                wrapperStyle={{ width: 150, backgroundColor: "#8884d8" }}
              />

              <Bar dataKey="Projects" fill="#8884d8" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <div className="descr">
            <p>{home.tech_description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Analysis;
