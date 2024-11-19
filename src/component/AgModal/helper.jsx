import AreaChartFillByValue from "../ChartComponent/AreaChartByValue";
import CustomPieChart from "../ChartComponent/CustomPieChart";
import LineRefrenceChart from "../ChartComponent/LineChart";
import StackedAreaChart from "../ChartComponent/StackedAreaChart";
import StackedBarChart from "../ChartComponent/StackedBarChart";
import TwoLevelPieChart from "../ChartComponent/TwoLevelPieChart";

export const componentTypes = {
  ["AREA_CHART_BY_VALUE"]: (params) => (
    <div className="chart-box">
      <AreaChartFillByValue {...params} />
    </div>
  ),
  ["CUSTOM_PIE_CHART"]: (params) => (
    <div className="chart-box">
      <CustomPieChart {...params} />
    </div>
  ),
  ["LINE_REFERENCE_CHART"]: (params) => (
    <div className="chart-box">
      <LineRefrenceChart {...params} />
    </div>
  ),
  ["STACKED_AREA_CHART"]: (params) => (
    <div className="chart-box">
      <StackedAreaChart {...params} />
    </div>
  ),
  ["STACKED_BAR_CHART"]: (params) => <StackedBarChart {...params} />,
  ["TWO_LEVEL_PIE_CHART"]: (params) => (
    <div className="chart-box">
      <TwoLevelPieChart {...params} />
    </div>
  ),
};
