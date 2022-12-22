import React from "react";

function FormInput({
  id,
  className,
  inputClassName,
  errorMessage,
  onChange,
  onBlur,
  isIncorrect,
  setIsDirty,
  name,
  pattern,
  ...inputProps
}) {

  return (
    <div className={className}>
      <input
        className={`${inputClassName} ${isIncorrect[name] ? "incorrectInput" : ""}`}
        name={name}
        {...inputProps}
        onChange={onChange}
        onBlur={(e) => {
          setIsDirty((prev) => ({ ...prev, [name]: true }));
        }}
      />
      <p
        className="incorrectInputMsg"
        style={{ display: isIncorrect[name] ? "block" : "none" }}
      >
        {errorMessage}
      </p>
    </div>
  );
}

export default FormInput;
