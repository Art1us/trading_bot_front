import React from "react";

function FormInput({
  label,
  className,
  inputClassName,
  errorMessage,
  onChange,
  onBlur,
  name,
  type,
  placeholder,
}) {
  return (
    <div className={className}>
      {label && <div className={label.className}>{label.text}</div>}
      <input
        className={`${inputClassName} ${errorMessage ? "incorrectInput" : ""}`}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
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
