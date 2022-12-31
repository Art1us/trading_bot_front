import React from "react";

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
        <option></option>
        {list.map((item) => {
          return <option key={item.id}>{item.name}</option>;
        })}
      </select>
      <p
        className="incorrectInputMsg"
        style={{ display: errorMessage ? "block" : "none" }}
      >
        *{errorMessage}
      </p>
    </div>
  );
}

export default FormSelect;
