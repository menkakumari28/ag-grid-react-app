import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { AgTableContext } from "../../context/AgTableContext";

const StackedBarChart = () => {
  const { selectedData } = useContext(AgTableContext);
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={selectedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="age" fill="#B3CDAD" />
      </BarChart>
    </ResponsiveContainer>
  );
};
export default StackedBarChart;
