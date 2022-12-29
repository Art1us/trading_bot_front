import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import ModeSelections from "./ModeSelections/ModeSelections";
import StrategyForm from "../TestMode/StrategyForm/StrategyForm";
import TestModeForm from "../TestMode/TestModeForm/TestModeForm";
import ModeSelection from "./ModeSelection/ModeSelection";

function ExchangePageFormController() {
  const [formStep, setFormStep] = useState(0);
  const { selectedBotSettings } = useContext(Context);
  const { mode, date, strategy } = selectedBotSettings;

  function conditionalComponent() {
    switch (true) {
      case !mode:
        return (
          <>
            <ModeSelection />
          </>
        );
      case !date.to:
        return (
          <>
            <ModeSelections formStep={1} />
            <TestModeForm />
          </>
        );
      case !strategy:
        return (
          <>
            <ModeSelections formStep={2} />
            <StrategyForm />
          </>
        );
      default:
        return <ModeSelections formStep={3} />;
    }
  }
  return conditionalComponent();
}

export default ExchangePageFormController;
