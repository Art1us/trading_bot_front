import React from "react";
import LightweightChart from "../TestModeGraphs/LightweightChart/LightweightChart";
import BotChart from "./BotChart/BotChart";
import BotTable from "./BotTable/BotTable";
import "./TestModeGraphs.css";

function TestModeGraphs() {
  return (
    <>
      <LightweightChart />
      <div className="testModeGraphs__botInfo">
        <h3 className="botChart__title">Bot graph</h3>
        <div className="testModeGraphs__botInfoContainer">
          <BotChart />
          <BotTable />
        </div>
      </div>
    </>
  );
}

export default TestModeGraphs;
