import React from "react";

function FormSelect({
  label,
  inputClassName,
  className,
  errorMessage,
  onChange,
  value,
  list,
  name,
  onBlur,
}) {
  return (
    <div className={className}>
      {label && <div className={label.className}>{label.text}</div>}
      <select
        name={name}
        className={`${inputClassName} ${errorMessage ? "incorrectInput" : ""}`}
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
