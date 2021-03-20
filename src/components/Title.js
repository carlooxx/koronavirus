import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
const Title = () => {
  const globalLast = useSelector((state) => state.globalLast);
  const { lastData } = globalLast;
  const datum = lastData ? moment(lastData.Datum).format("D.M") : "";
  const sat = lastData ? moment(lastData.Datum).format("H:mm") : "";
  return (
    <div>
      <h1>Hrvatska</h1>
      <p>
        <strong>
          Ažurirano {datum} u {sat}
        </strong>
      </p>
      <p>
        <strong>Izvor: Hrvatski zavod za javno zdravstvo</strong>
      </p>
    </div>
  );
};

export default Title;
