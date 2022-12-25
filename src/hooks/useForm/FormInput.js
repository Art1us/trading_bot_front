import React from "react";

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
  return (
    <div className={className}>
      {label && <div className={label.className}>{label.text}</div>}
      <input
        className={`${inputClassName} ${errorMessage ? "incorrectInput" : ""}`}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...inputProps}
      />
      <p
        className="incorrectInputMsg"
        style={{ display: errorMessage ? "block" : "none", zIndex: "3" }}
      >
        *{errorMessage}
      </p>
    </div>
  );
}

export default FormInput;
