import React, { useContext } from "react";
import "./ExchangePage.css";
import ExchangePageFormController from "../../components/ExchangePageFormController/ExchangePageFormController";
import TestModeGraphs from "../../components/BotGraphs/TestModeGraphs";
import { Context } from "../../Context";

function ExchangePage() {
  const { selectedBotSettings } = useContext(Context);
  const { mode, date, strategy } = selectedBotSettings;
  const displayGraphs = mode.id && date.from && date.to && strategy.id;

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        <ExchangePageFormController />
        <div className="exchangePage__body">
          {!!displayGraphs && <TestModeGraphs />}
        </div>
      </div>
    </div>
  );
}

export default ExchangePage;
