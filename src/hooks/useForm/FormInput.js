import React from "react";

function FormInput({
  label,
  className,
  inputClassName,
  errorMessage,
  onChange,
  setIsDirty,
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
        onBlur={(e) => {
          setIsDirty((prev) => ({ ...prev, [name]: true }));
        }}
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
