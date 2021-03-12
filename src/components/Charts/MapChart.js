import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import data from "../../hrv_regional.json";
import MapInfo from "./MapInfo";
import MapLabel from "./MapLabel";

const MapChart = () => {
  const [selected, setSelected] = useState(null);
  const countyLastData = useSelector((state) => state.countyLastData);
  const { countylastData } = countyLastData;

  const svgRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    if (countylastData) {
      const svg = select(svgRef.current);

      //Min i Max broj aktivnih slucajeva u danu
      const minProp = min(countylastData.map((broj) => broj.broj_aktivni));
      const maxProp = max(countylastData.map((broj) => broj.broj_aktivni));
      //Bojanje mape u zavisnosti od min i max
      const colorScale = scaleLinear()
        .domain([minProp, maxProp])
        .range(["#ccc", "red"]);

      const { width, height } = boxRef.current.getBoundingClientRect();

      //Odabir projekcije karte
      const projection = geoMercator().fitSize([width, height], data);

      //Koristi json podatke te ih pretvara u putanju uz pomoc d atributa
      const pathGenerator = geoPath().projection(projection);

      svg
        .selectAll(".country")
        .data(data.features)
        .join("path")
        .attr("class", "country")
        .on("click", (e, geoItem) => {
          let name = geoItem.properties["name"];
          let zupanija = countylastData.find((item) => {
            return item["Zupanija"] === name;
          });
          let aktivni = zupanija["broj_aktivni"];
          let zarazenih = zupanija["broj_zarazenih"];
          let umrlih = zupanija["broj_umrlih"];

          setSelected([name, aktivni, zarazenih, umrlih]);
        })
        .attr("d", (feature) => pathGenerator(feature))
        .attr("fill", (geoItem) => {
          let name = geoItem.properties["name"];
          let zupanija = countylastData.find((item) => {
            return item["Zupanija"] === name;
          });
          let aktivni = zupanija ? zupanija["broj_aktivni"] : [];

          return colorScale(aktivni);
        });
    }
  }, [countylastData, selected]);

  return (
    <>
      <div className="box" ref={boxRef} style={{ marginBottom: "2rem" }}>
        <h4>Prikaz Aktivnih Slučajeva po Županijama</h4>
        <MapLabel />
        <MapInfo selected={selected} />
        <svg ref={svgRef}></svg>
      </div>
    </>
  );
};

export default MapChart;
