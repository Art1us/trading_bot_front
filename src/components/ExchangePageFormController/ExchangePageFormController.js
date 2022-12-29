import React, { useContext } from "react";
import { Context } from "../../Context";
import ModeSelections from "./ModeSelections/ModeSelections";
import StrategyForm from "./StrategyForm/StrategyForm";
import DateForm from "./DateForm/DateForm";
import ModeSelection from "./ModeSelection/ModeSelection";

function ExchangePageFormController() {
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
            <DateForm />
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
