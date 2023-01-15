import React, { useEffect, useState } from "react"
import "./Input.css"
import PasswordEyeBtn from "../PasswordEyeBtn/PasswordEyeBtn"

function Input({ data, isError }) {
  const { className, onChange, onBlur, value, props } = data

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isPasswordFilled, setIsPasswordFilled] = useState(false)

  useEffect(() => {
    if (value) {
      setIsPasswordFilled(true)
    } else {
      setIsPasswordFilled(false)
    }
  }, [props.type === "password" && value])

  return (
    <div style={{ position: "relative" }} className={className}>
      <input
        className={`formInput__defaultInputStyles ${
          isError ? "incorrectInput" : ""
        }`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
        type={
          props.type === "password" && isPasswordVisible ? "text" : props.type
        }
      />
      {props.type === "password" && isPasswordFilled && (
        <PasswordEyeBtn
          isPasswordVisible={isPasswordVisible}
          setIsPasswordVisible={setIsPasswordVisible}
        />
      )}
    </div>
  )
}

export default Input
