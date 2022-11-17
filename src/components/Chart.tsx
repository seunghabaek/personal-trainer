import { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "./data/chartDataJson";

export const Data = () => {
  return (
    <LineChart
      width={350}
      height={250}
      data={chartData}
      margin={{
        top: 20,
        right: 40,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="weight"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="fatRatio" stroke="#82ca9d" />
    </LineChart>
  );
};
