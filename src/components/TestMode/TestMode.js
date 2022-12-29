import React, { useState } from "react";
import TestModeGraphs from "../TestModeGraphs/TestModeGraphs";
import TestModeForm from "../TestModeForm/TestModeForm";
import "./TestMode.css";
import StrategyForm from "./StrategyForm/StrategyForm";

function TestMode() {
  const [showGraphs, setShowGraphs] = useState(false);

  return (
    <div className="testMode">
      <StrategyForm />
      {/* <div className="testMode__container">
        <div className="testMode__title">
          <h2>Select date range</h2>
        </div>
        <TestModeForm setShowGraphs={setShowGraphs} />
        {showGraphs && <TestModeGraphs />}
      </div> */}
    </div>
  );
}

export default TestMode;