import React, { useContext } from "react";
import { Context } from "../../Context";
import SelectionsHeader from "./SelectionsHeader/SelectionsHeader";
import StrategyForm from "./StrategyForm/StrategyForm";
import DateForm from "./DateForm/DateForm";
import ModeSelection from "./ModeSelection/ModeSelection";

function ExchangePageFormController() {
  const { selectedBotSettings } = useContext(Context);
  const { mode, date, strategy } = selectedBotSettings;

  function conditionalComponent() {
    switch (true) {
      case !mode.id:
        return (
          <>
            <ModeSelection />
          </>
        );
      case !date.to:
        return (
          <>
            <SelectionsHeader formStep={1} />
            <DateForm />
          </>
        );
      case !strategy.id:
        return (
          <>
            <SelectionsHeader formStep={2} />
            <StrategyForm />
          </>
        );
      default:
        return <SelectionsHeader formStep={3} />;
    }
  }
  return conditionalComponent();
}

export default ExchangePageFormController;
