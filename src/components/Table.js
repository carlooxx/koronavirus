import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { formatNumb } from "../util";

const TablePart = () => {
  const countyLastData = useSelector((state) => state.countyLastData);
  const { countylastData } = countyLastData;

  return (
    <>
      {countylastData ? (
        <>
          <h3>Županije</h3>
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm my-3"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>ŽUPANIJA</th>
                <th>ZARAŽENI</th>
                <th>AKTIVNI</th>
                <th>UMRLI</th>
              </tr>
            </thead>
            <tbody>
              {countylastData.map((zupanija) => (
                <tr key={zupanija.Zupanija}>
                  <td>{zupanija.Zupanija}</td>
                  <td>{formatNumb(zupanija.broj_zarazenih)}</td>
                  <td>
                    <i className="fas fa-arrow-up text-info"></i>{" "}
                    {formatNumb(zupanija.broj_aktivni)}
                  </td>
                  <td>{formatNumb(zupanija.broj_umrlih)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default TablePart;
