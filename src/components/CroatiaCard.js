import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  globalLastData,
  croatiaAllData,
  countyAllData,
  countyActiveData,
} from "../action/index";
import { Card } from "react-bootstrap";
import Loader from "../components/Loader";

const CroatiaCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalLastData());
    dispatch(croatiaAllData());
    dispatch(countyAllData());
    dispatch(countyActiveData());
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
            HR:{" "}
            {String(lastData.SlucajeviHrvatska).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1,"
            )}
          </Card.Text>
          <Card.Text>
            Svijet:{" "}
            {String(lastData.SlucajeviSvijet).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1,"
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="danger">
        <Card.Body>
          <Card.Title>Ukupan Broj Umrlih</Card.Title>
          <Card.Text style={{ color: "white" }}>
            HR:{" "}
            {String(lastData.UmrliHrvatska).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
          </Card.Text>
          <Card.Text>
            Svijet:{" "}
            {String(lastData.UmrliSvijet).replace(/(.)(?=(\d{3})+$)/g, "$1,")}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="my-3 p-5 rounded card" bg="success">
        <Card.Body>
          <Card.Title>Ukupan Broj Oporavljenih</Card.Title>
          <Card.Text style={{ color: "white" }}>
            HR:{" "}
            {String(lastData.IzlijeceniHrvatska).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1,"
            )}
          </Card.Text>
          <Card.Text>
            Svijet:{" "}
            {String(lastData.IzlijeceniSvijet).replace(
              /(.)(?=(\d{3})+$)/g,
              "$1,"
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CroatiaCard;
