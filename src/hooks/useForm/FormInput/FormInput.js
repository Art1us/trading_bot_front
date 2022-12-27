import React, { useEffect, useState } from "react";
import "./FormInput.css";
import PasswordEyeBtn from "../PasswordEyeBtn/PasswordEyeBtn";

function FormInput({
  className,
  inputClassName,
  inputProps,
  label,
  errorMessage,
  onChange,
  onBlur,
  value,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  useEffect(() => {
    if (value) {
      setIsPasswordFilled(true);
    } else {
      setIsPasswordFilled(false);
    }
  }, [inputProps.type === "password" && value]);

  return (
    <div className={className}>
      {label && <div className={label.className}>{label.text}</div>}
      <div style={{ position: "relative" }} className={inputClassName}>
        <input
          className={`formInput__defaultInputStyles ${
            errorMessage ? "incorrectInput" : ""
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
        className="incorrectInputMsg"
        style={{ display: errorMessage ? "block" : "none" }}
      >
        *{errorMessage}
      </p>
    </div>
  );
}

export default FormInput;
