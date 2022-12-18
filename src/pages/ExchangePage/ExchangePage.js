import React, { useState } from "react";
import "./ExchangePage.css";
import TestMode from "../../components/TestMode/TestMode";
import StartMode from "../../components/StartMode/StartMode";

function ExchangePage() {
  const [selectMode, setSelectMode] = useState("");

  const testModeSelected =
    selectMode === "test" ? "exchangePage__mode--selected" : "";
  const startModeSelected =
    selectMode === "start" ? "exchangePage__mode--selected" : "";

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        <div className="exchangePage__modes">
          <div
            className={`exchangePage__mode ${testModeSelected}`}
            onClick={() => setSelectMode("test")}
          >
            Test MODE
          </div>
          <div
            className={`exchangePage__mode ${startModeSelected}`}
            onClick={() => setSelectMode("start")}
          >
            Start MODE
          </div>
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
