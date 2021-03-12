import React from "react";

const MapInfo = ({ selected }) => {
  return !selected ? (
    ""
  ) : (
    <>
      <div className="info">
        <h2>
          <mark>{selected[0]}</mark>
        </h2>
        <p>Broj Aktivnih: {selected[1]}</p>
        <p>Broj Umrlih: {selected[3]}</p>
        <p>Broj Zarazenih: {selected[2]}</p>
      </div>
    </>
  );
};

export default MapInfo;
