import React, { useState, useContext } from "react";
import "./ExchangePage.css";
/* import TestMode from "../../components/TestMode/TestMode";
import StartMode from "../../components/StartMode/StartMode";
import ModeSelections from "../../components/ModeSelections/ModeSelections";
import TestModeMain from "../../components/TestMode/TestModeMain/TestModeMain";
import StartModeMain from "../../components/StartMode/StartModeMain/StartModeMain";
import TestModeForm from "../../components/TestMode/TestModeForm/TestModeForm";
import StrategyForm from "../../components/TestMode/StrategyForm/StrategyForm"; */
import { Context } from "../../Context";
import ExchangePageFormController from "../../components/ExchangePageFormController/ExchangePageFormController";

function ExchangePage() {
  const { selectedBotSettings } = useContext(Context);
  console.log(selectedBotSettings);

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        

        <ExchangePageFormController />

        {/* <div className="exchangePage__body">
          {selectMode === "test" && <TestMode />}
          {selectMode === "start" && <StartMode />}
        </div> */}
      </div>
    </div>
  );
}

export default ExchangePage;
