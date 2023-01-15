import React, { useEffect, useState } from "react"
import "./FormInput.css"
import "./InputErrorStyles.css"
import PasswordEyeBtn from "../PasswordEyeBtn/PasswordEyeBtn"
import HintIcon from "../FormInput/Label/HintIcon/HintIcon"

function FormInput({
  className,
  inputClassName,
  inputProps,
  label,
  error,
  onChange,
  onBlur,
  value,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordFilled, setIsPasswordFilled] = useState(false)

  useEffect(() => {
    if (value) {
      setIsPasswordFilled(true)
    } else {
      setIsPasswordFilled(false)
    }
  }, [inputProps.type === "password" && value])

  return (
    <div className={className}>
      {label && (
        <div className={label.className}>
          {label.text} {label.hint && <HintIcon text={label.hint} />}
        </div>
      )}
      <div style={{ position: "relative" }} className={inputClassName}>
        <input
          className={`formInput__defaultInputStyles ${
            error.errorMessage ? "incorrectInput" : ""
          }`}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          {...inputProps}
          type={
            inputProps.type === "password" && isPasswordVisible
              ? "text"
              : inputProps.type
          }
        />
        {inputProps.type === "password" && isPasswordFilled && (
          <PasswordEyeBtn
            isPasswordVisible={isPasswordVisible}
            setIsPasswordVisible={setIsPasswordVisible}
          />
        )}
      </div>
      <p
        className={error.className ? error.className : "incorrectInputMsg"}
        style={{ display: error.errorMessage ? "block" : "none" }}
      >
        *{error.errorMessage}
      </p>
    </div>
  )
}

export default FormInput
