import React from "react";
import CroatiaCard from "../components/CroatiaCard";
import { Col, Row } from "react-bootstrap";
import MapChart from "../components/Charts/MapChart";
import CroatiaChartFirstCase from "../components/Charts/CroatiaChartFirstCase";
import CroatiaChartActive from "../components/Charts/CroatiaChartActive";

const Home = () => {
  return (
    <>
      <Row>
        <Col md={4}>
          <CroatiaCard />
        </Col>
        <Col>
          <MapChart />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CroatiaChartFirstCase />
        </Col>
        <Col md={6}>
          <CroatiaChartActive />
        </Col>
      </Row>
    </>
  );
};

export default Home;
