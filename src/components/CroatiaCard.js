import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { globalLastData, croatiaAllData, countyAllData } from "../action/index";
import { Card } from "react-bootstrap";
import { formatNumb } from "../util";
import Loader from "../components/Loader";

const CroatiaCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalLastData());
    dispatch(croatiaAllData());
    dispatch(countyAllData());
  }, [dispatch]);

  const globalLast = useSelector((state) => state.globalLast);
  const { lastData } = globalLast;

  return !lastData ? (
    <Loader />
  ) : (
    <>
      <Card className="my-3 p-5 rounded card" bg="info">
        <Card.Body>
          <Card.Title as="h4">Slučajevi</Card.Title>
          <Card.Text as="h3" style={{ color: "white" }}>
            HR: {lastData.SlucajeviHrvatska} {"  "}
            <i className="fas fa-viruses"></i>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="danger">
        <Card.Body>
          <Card.Title as="h4">Umrli</Card.Title>
          <Card.Text as="h3" style={{ color: "white" }}>
            HR: {lastData.UmrliHrvatska} {"  "}
            <i className="fas fa-head-side-virus"></i>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="success">
        <Card.Body>
          <Card.Title as="h4">Oporavljeni</Card.Title>
          <Card.Text as="h3" style={{ color: "white" }}>
            {lastData.IzlijeceniHrvatska} {"  "}
            <i className="far fa-plus-square"></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CroatiaCard;
