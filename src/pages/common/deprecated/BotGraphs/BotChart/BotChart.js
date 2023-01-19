import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"
import CustomTooltip from "./CustomTooltip/CustomTooltip"
import "./BotChart.css"
import data from "../botInfoTestData"

function BotChart() {
  return (
    <LineChart
      width={750}
      height={250}
      data={data}
      margin={{ top: 0, right: 0, left: -25, bottom: -10 }}
      className="botChart"
    >
      <Line type="monotone" dataKey="profit" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip content={<CustomTooltip />} />
    </LineChart>
  )
}

export default BotChart
