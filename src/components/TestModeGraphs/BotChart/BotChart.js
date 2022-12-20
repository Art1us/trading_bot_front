import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import CustomTooltip from "./CustomTooltip/CustomTooltip";

function BotChart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400, height: 1337 },
    { name: "Page B", uv: 300, pv: 2400, amt: 2400, height: 1338 },
    { name: "Page C", uv: 500, pv: 2400, amt: 2400, height: 1438 },
    { name: "Page D", uv: 100, pv: 2400, amt: 2400, height: 1488 },
    { name: "Page E", uv: 200, pv: 2400, amt: 2400, height: 228 },
  ];
  return (
    <LineChart width={900} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}

export default BotChart;
