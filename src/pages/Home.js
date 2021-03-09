import React from "react";
import CroatiaCard from "../components/CroatiaCard";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col sm={12} md={6} lg={4} xl={4}>
        <CroatiaCard />
      </Col>
    </Row>
  );
};

export default Home;
