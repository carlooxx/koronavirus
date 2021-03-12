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
          <Card.Title>Ukupan Broj Zaraženih</Card.Title>
          <Card.Text style={{ color: "white" }}>
            <p>HR: {lastData.SlucajeviHrvatska}</p>
            <p>Svijet: {lastData.SlucajeviSvijet}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="danger">
        <Card.Body>
          <Card.Title>Ukupan Broj Umrlih</Card.Title>
          <Card.Text style={{ color: "white" }}>
            <p>HR: {lastData.SlucajeviHrvatska}</p>
            <p>Svijet: {lastData.SlucajeviSvijet}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="success">
        <Card.Body>
          <Card.Title>Ukupan Broj Oporavljenih</Card.Title>
          <Card.Text style={{ color: "white" }}>
            <p>HR: {lastData.SlucajeviHrvatska}</p>
            <p>Svijet: {lastData.SlucajeviSvijet}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CroatiaCard;
