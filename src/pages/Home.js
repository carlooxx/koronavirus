import React from "react";
import CroatiaCard from "../components/CroatiaCard";
import { Col, Row } from "react-bootstrap";
import MapChart from "../components/Charts/MapChart";

const Home = () => {
  return (
    <Row>
      <Col md={4}>
        <CroatiaCard />
      </Col>
      <Col>
        <MapChart />
      </Col>
    </Row>
  );
};

export default Home;
