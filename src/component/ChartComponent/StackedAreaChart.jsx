import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { AgTableContext } from "../../context/AgTableContext";

const StackedAreaChart = () => {
  const { selectedData } = useContext(AgTableContext);
  return (
    <AreaChart
      width={500}
      height={400}
      data={selectedData}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="age"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
    </AreaChart>
  );
};

export default StackedAreaChart;
