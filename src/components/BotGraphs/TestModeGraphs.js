import React from "react"
import LightweightChart from "./LightweightChart/LightweightChart"
import BotSettings from "./BotSettings/BotSettings"

import BotChart from "./BotChart/BotChart"
import BotTable from "./BotTable/BotTable"
import "./TestModeGraphs.css"

function TestModeGraphs() {
  return (
    <>
      <div className="testModeGraphs__container">
        <div className="testModeGraphs__upperContainer">
          <LightweightChart />
          <BotSettings />
        </div>
        <div className="testModeGraphs__lowerContainer">
          <div className="testModeGraphs__botInfoContainer">
            <BotChart />
            <BotTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default TestModeGraphs
