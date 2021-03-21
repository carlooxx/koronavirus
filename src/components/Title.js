import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Title = () => {
  const globalLast = useSelector((state) => state.globalLast);
  const { lastData } = globalLast;
  const datum = lastData ? moment(lastData.Datum).format("DD.MM") : "";
  const sat = lastData ? moment(lastData.Datum).format("HH:mm") : "";
  return (
    <>
      <h1>Hrvatska</h1>
      <p>
        <strong>
          Ažurirano {datum} u {sat}
        </strong>
      </p>
      <p>
        <strong>Izvor: Hrvatski zavod za javno zdravstvo</strong>
      </p>
    </>
  );
};

export default Title;
