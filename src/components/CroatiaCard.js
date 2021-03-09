import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { globalLastData } from "../action/index";

const CroatiaCard = () => {
  const dispatch = useDispatch();

  const globalLast = useSelector((state) => state.globalLast);
  const { data } = globalLast;

  const slucajevi = data ? data[0].SlucajeviHrvatska : "";
  const umrli = data ? data[0].UmrliHrvatska : "";
  const izljeceni = data ? data[0].IzlijeceniHrvatska : "";

  useEffect(() => {
    dispatch(globalLastData());
  }, [dispatch]);

  return (
    <>
      <Card className="my-3 p-3 rounded card text" bg="info">
        <Card.Body>
          <Card.Title as="h4">Slučajevi</Card.Title>
          <Card.Text as="h3">
            {slucajevi} {"  "}
            <i class="fas fa-viruses"></i>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-3 p-3 rounded card" bg="danger">
        <Card.Body className="text">
          <Card.Title as="h4">Umrli</Card.Title>
          <Card.Text as="h3">
            {umrli} {"  "}
            <i class="fas fa-head-side-virus"></i>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-3 p-3 rounded card" bg="success">
        <Card.Body>
          <Card.Title as="h4">Oporavljeni</Card.Title>
          <Card.Text as="h3">
            {izljeceni} {"  "}
            <i class="far fa-plus-square"></i>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CroatiaCard;
