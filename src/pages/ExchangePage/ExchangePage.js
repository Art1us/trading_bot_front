import React, { useContext } from "react"
import "./ExchangePage.css"
import ExchangePageFormController from "../../components/ExchangePageFormController/ExchangePageFormController"
import TestModeGraphs from "../../components/BotGraphs/TestModeGraphs"
import { Context } from "../../Context"
import TestModeTables from "../../components/TestModeTables/TestModeTables"

function ExchangePage() {
  const { selectedBotSettings } = useContext(Context)
  const { mode, date, strategy } = selectedBotSettings
  const displayGraphs = mode.id && date.from && date.to && strategy.id

  return (
    <div className="exchangePage">
      <div className="exchangePage__container">
        {/* <ExchangePageFormController />
        <div className="exchangePage__body">
          {!!displayGraphs && <TestModeGraphs />}
        </div> */}
        <TestModeTables />
      </div>
    </div>
  )
}

export default ExchangePage
