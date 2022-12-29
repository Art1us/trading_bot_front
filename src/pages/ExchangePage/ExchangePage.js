import React, { useState, useContext } from "react";
import "./ExchangePage.css";
import TestMode from "../../components/TestMode/TestMode";
import StartMode from "../../components/StartMode/StartMode";
import ModeSelections from "../../components/ModeSelections/ModeSelections";
import TestModeMain from "../../components/TestMode/TestModeMain/TestModeMain";
import StartModeMain from "../../components/StartMode/StartModeMain/StartModeMain";
import TestModeForm from "../../components/TestMode/TestModeForm/TestModeForm";
import StrategyForm from "../../components/TestMode/StrategyForm/StrategyForm";
import { Context } from "../../Context";
import ModeSelection from "../../components/ExchangePageForms/ModeSelection/ModeSelection";

function ExchangePage() {
  const [showDateForm, setShowDateForm] = useState(true);
  const { selectedBotSettings, setSelectedBotSettings } = useContext(Context);
  console.log(selectedBotSettings);

  function conditionalComponent() {
    const { mode, date, strategy } = selectedBotSettings;

    switch (true) {
      case !mode:
        return <ModeSelection />;
      case !date.to:
        return <TestModeForm />;
      case !strategy:
        return <StrategyForm />;
      default:
        return "";
    }
  }

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        {/* <ModeSelections /> */}

        {conditionalComponent()}

        {/* <div className="exchangePage__body">
          {selectMode === "test" && <TestMode />}
          {selectMode === "start" && <StartMode />}
        </div> */}
      </div>
    </div>
  );
}

export default ExchangePage;
