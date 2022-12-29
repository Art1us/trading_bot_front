import React, { useState } from "react";
import "./ExchangePage.css";
import TestMode from "../../components/TestMode/TestMode";
import StartMode from "../../components/StartMode/StartMode";
import ModeSelections from "../../components/ModeSelections/ModeSelections";
import TestModeMain from "../../components/TestMode/TestModeMain/TestModeMain";
import StartModeMain from "../../components/StartMode/StartModeMain/StartModeMain";

function ExchangePage() {
  const [selectMode, setSelectMode] = useState("");

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        <ModeSelections />
        <div className="exchangePage__modes">
          <TestModeMain onClick={() => setSelectMode("test")} />
          <StartModeMain onClick={() => setSelectMode("start")} />
        </div>
        <div className="exchangePage__body">
          {selectMode === "test" && <TestMode />}
          {selectMode === "start" && <StartMode />}
        </div>
      </div>
    </div>
  );
}

export default ExchangePage;
