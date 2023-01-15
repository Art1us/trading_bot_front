import React from "react"
import Label from "./Label/Label"
import Error from "./Error/Error"
import Input from "./Input/Input"

function FormInput({ className, label, input, error }) {
  return (
    <div className={className}>
      <Label data={label} />
      <Input data={input} isError={!!error.errorMessage} />
      <Error data={error} />
    </div>
  )
}

export default FormInput
