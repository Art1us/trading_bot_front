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
  value
}) {
  return (
    <div className={className} >
      {label && <div className={label.className}>{label.text}</div>}
      <input
        className={`${inputClassName} ${errorMessage ? "incorrectInput" : ""}`}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      <p
        className="incorrectInputMsg"
        style={{ display: errorMessage ? "block" : "none",zIndex:"3" }}
      >
        *{errorMessage}
      </p>
    </div>
  );
}

export default FormInput;
