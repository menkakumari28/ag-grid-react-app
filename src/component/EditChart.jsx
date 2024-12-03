import React, { useContext } from "react";
import GraphOne from "../assets/images/graph1.png";
import GraphTwo from "../assets/images/graph2.png";
import GraphThree from "../assets/images/graph3.png";
import GraphFour from "../assets/images/graph4.png";
import GraphFive from "../assets/images/graph5.png";
import AreaChart from "../assets/images/area1.png";
import AreaChartTwo from "../assets/images/area2.png";
import LineChart from "../assets/images/line.png";
import { AgTableContext } from "../context/AgTableContext";
const EditChart = () => {
  const { setComponent } = useContext(AgTableContext);
  const handleClick = (chartName) => {
    setComponent(chartName);
  };

  return (
    <>
      <div className="bg">
        <h1>Column</h1>

        <img
          src={GraphOne}
          onClick={() => handleClick("STACKED_BAR_CHART")}
          alt="graph"
        />
        <img
          src={GraphTwo}
          alt="graph"
          onClick={() => handleClick("STACKED_BAR_CHART")}
        />

        <h1>Bar</h1>

        <img
          src={GraphThree}
          alt="graph"
          onClick={() => handleClick("STACKED_BAR_CHART")}
        />
        <img
          src={GraphFour}
          alt="graph"
          onClick={() => handleClick("CUSTOM_PIE_CHART")}
        />

        <h1>Pie</h1>

        <img
          src={GraphFour}
          alt="graph"
          onClick={() => handleClick("CUSTOM_PIE_CHART")}
        />
        <img
          src={GraphFive}
          alt="graph"
          onClick={() => handleClick("TWO_LEVEL_PIE_CHART")}
        />

        <h1>Line</h1>

        <img
          src={LineChart}
          alt="graph"
          onClick={() => handleClick("LINE_REFERENCE_CHART")}
        />

        <h1>Area</h1>
        <img
          src={AreaChart}
          alt="graph"
          onClick={() => handleClick("STACKED_AREA_CHART")}
        />
        <img
          src={AreaChartTwo}
          alt="graph"
          onClick={() => handleClick("AREA_CHART_BY_VALUE")}
        />
      </div>
    </>
  );
};
export default EditChart;
