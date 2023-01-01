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
import "./BotChart.css";
import data from "../botInfoTestData";

function BotChart() {
  return (
    <LineChart width={900} height={400} data={data} className="botChart">
      <Line type="monotone" dataKey="profit" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  );
}

export default BotChart;
