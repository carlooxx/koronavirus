import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  select,
  line,
  scaleLinear,
  max,
  scaleTime,
  axisBottom,
  axisLeft,
  extent,
  timeParse,
  zoomTransform,
  zoom,
} from "d3";

// Promatrac promjene dimenzija
const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      //Set rezised dimensions
      entries.forEach((entery) => {
        setDimensions(entery.contentRect);
      });
    });

    resizeObserver.observe(observeTarget);
    //Cleanup
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

const CroatiaChartActive = ({ id = "ZoomChart" }) => {
  const countyAllActive = useSelector((state) => state.countyAllActive);
  const { countyActiveData } = countyAllActive;
  const [currentZoom, setCurrentZoom] = useState();

  const parseDate = timeParse("%Y-%m-%d %H:%M");

  const aktivni = countyActiveData ? countyActiveData.map((data) => data) : "";

  const aktive = aktivni ? aktivni.map((data) => data["PodaciDetaljno"]) : "";

  const activ = aktive
    ? aktive.map((data) => {
        const dom = data.map((acc) => acc.broj_aktivni);
        const stradali = dom.reduce((acc, curr) => acc + curr, 0);

        return { stradali: stradali };
      })
    : "";

  const datum = countyActiveData
    ? countyActiveData.map((data) => ({
        datum: parseDate(data.Datum),
      }))
    : "";

  let podatci = datum
    ? datum.map((item, i) => Object.assign({}, item, activ[i]))
    : "";

  //   Sortiranje podataka od prvog dana pandemije
  const sortData = podatci
    ? podatci.sort((a, b) => new Date(a.datum) - new Date(b.datum))
    : "";

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    const svgContent = svg.select(".content");

    if (!dimensions) return;

    const xValue = (d) => d.datum;
    const yValue = (d) => d.stradali;

    const xScale = scaleTime()
      .domain(extent(sortData, (d) => d.datum))
      .range([0, dimensions.width]);

    if (currentZoom) {
      const newXscale = currentZoom.rescaleX(xScale);
      xScale.domain(newXscale.domain());
    }

    const yScale = scaleLinear()
      .domain([0, max(sortData, yValue) + 5000])
      .range([dimensions.height, 0]);

    const xAxis = axisBottom(xScale).ticks(5).tickPadding(10);

    const yAxis = axisLeft(yScale).ticks(5).tickPadding(10);

    //Pozicioniranje x koordinate
    svg
      .select(".x-axis")
      .style("transform", `translateY(${dimensions.height}px)`)
      .call(xAxis);
    svg.select(".y-axis").call(yAxis);

    //Funkcija koja generira d atribut a koji pravi path
    const aktivniLine = line()
      .x((d) => xScale(xValue(d)))
      .y((d) => yScale(yValue(d)));

    svgContent
      .selectAll(".line")
      .data([sortData])
      .join("path")
      .attr("class", "line")
      .attr("d", aktivniLine)
      .attr("fill", "none")
      .attr("stroke", "blue");

    //Zoom
    const zommBehavior = zoom()
      .scaleExtent([0.5, 15])
      .translateExtent([
        [0, 0],
        [dimensions.width, dimensions.height],
      ])
      .on("zoom", () => {
        const zoomState = zoomTransform(svg.node());
        setCurrentZoom(zoomState);
      });

    svg.call(zommBehavior);
  }, [dimensions, sortData, currentZoom]);

  return (
    <div ref={wrapperRef} className="wrapper">
      <svg ref={svgRef} id="lineChart">
        <defs>
          <clipPath id={id}>
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <g className="content" clipPath={`url(#${id})`}></g>
        <text transform={`translate(120, -10)`}>
          Aktivni Slučajevi Hrvatska
        </text>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
};

export default CroatiaChartActive;
