import React from "react"

import "./ExchangeForm.css"

import { useForm } from "hooks"
import { formInputsData } from "./data"

function ExchangeForm() {
  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputsData)

  function areDatesInvalid(dateStart, scanFrom) {
    let dateMax = new Date(dateStart)
    let dateMin = new Date(
      new Date(dateStart).setMonth(new Date(dateStart).getMonth() - 2)
    ).getTime()
    let dateFrom = new Date(scanFrom).getTime()
    if (dateMin > dateFrom || dateMax < dateFrom) return true
  }

  function submitHandler(e) {
    e.preventDefault()
    if (areDatesInvalid(formValues.dateStart, formValues.analysisDepth)) {
      displayCustomError("Please enter correct dates!", "dateStart")
      displayCustomError("Please enter correct dates!", "analysisDepth")
      return
    }
    if (isSubmitInvalid()) return

    let body = {
      dateStart: new Date(formValues.dateStart).getTime(),
      analysisDepth: new Date(formValues.analysisDepth).getTime(),
      deposit: formValues.deposit,
      takeProfit: formValues.takeProfit,
      stopLose: formValues.stopLose,
      holdingTime: new Date(formValues.holdingTime).getTime(),
    }
    console.log(body)
  }

  return (
    <form className="exchangePage__form" onSubmit={submitHandler}>
      <div className="exchangePage__formTitle">
        <h3>Bot settings</h3>
      </div>
      {inputComponents}
      <button className="exchangePage__startBotBtn">Start bot</button>
    </form>
  )
}

export default ExchangeForm
