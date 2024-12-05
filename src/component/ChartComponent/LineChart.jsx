import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";
import { AgTableContext } from "../../context/AgTableContext";

const LineRefrenceChart = () => {
  const { selectedData: data } = useContext(AgTableContext);

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 50,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine x="Page C" stroke="red" label="Max AGE PAGE" />
      <ReferenceLine y={9800} label="Max" stroke="red" />
      <Line type="monotone" dataKey="age" stroke="#8884d8" />
    </LineChart>
  );
}
export default LineRefrenceChart;
