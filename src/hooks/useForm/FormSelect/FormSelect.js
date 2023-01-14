import React from "react"
import "./FormSelect.css"

function FormSelect({
  className,
  inputClassName,
  inputProps,
  label,
  errorMessage,
  onChange,
  onBlur,
  value,
  list,
}) {
  return (
    <div className={className}>
      {label && <div className={label.className}>{label.text}</div>}
      <select
        className={`${inputClassName} ${errorMessage ? "incorrectInput" : ""}`}
        {...inputProps}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option className="formSelect__option"></option>
        {list.map(item => {
          return (
            <option key={item.id} className="formSelect__option">
              {item.name}
            </option>
          )
        })}
      </select>
      <p
        className="incorrectInputMsg"
        style={{ display: errorMessage ? "block" : "none" }}
      >
        *{errorMessage}
      </p>
    </div>
  )
}

export default FormSelect
