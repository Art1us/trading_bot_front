import React from "react"
import useForm from "../../hooks/useForm/useForm"
import formInputData from "./formInputData/formInputData"
import "./ExchangeForm.css"

function ExchangeForm() {
  const { inputComponents, isSubmitInvalid, formValues, displayCustomError } =
    useForm(formInputData)

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
      displayCustomError("Please enter correct dates!")
      return
    }
    if (isSubmitInvalid()) return
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
