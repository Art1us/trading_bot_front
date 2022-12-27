import React, { useEffect, useState } from "react";
import FormInput from "./FormInput/FormInput";
import FormSelect from "./FormSelect";

function useForm(inputs, values) {
  const initialFormValues = values ? { ...values } : {};
  if (!values) {
    inputs.forEach((input) => {
      initialFormValues[input.inputData.props.name] = "";
    });
  }

  const initialFormErrors = {};
  inputs.forEach((input) => {
    initialFormErrors[input.inputData.props.name] = "";
  });

  const initialFormIsDirty = {};
  inputs.forEach((input) => {
    initialFormIsDirty[input.inputData.props.name] = values ? true : false;
  });

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorMessages, setErrorMessages] = useState(initialFormErrors);
  const [isDirty, setIsDirty] = useState(initialFormIsDirty);

  useEffect(() => {
    inputs.forEach((input) => {
      function getError() {
        for (let error of input.errors) {
          if (
            error.condition &&
            new RegExp(error.condition).test(
              formValues[input.inputData.props.name]
            )
          ) {
            return error.message;
          }

          if (
            error.pattern &&
            !new RegExp(error.pattern).test(
              formValues[input.inputData.props.name]
            )
          ) {
            return error.message;
          }
        }
      }

      if (isDirty[input.inputData.props.name] && getError()) {
        setErrorMessages((prev) => ({
          ...prev,
          [input.inputData.props.name]: getError(),
        }));
      } else {
        setErrorMessages((prev) => ({
          ...prev,
          [input.inputData.props.name]: "",
        }));
      }
    });
  }, [formValues, isDirty]);

  function isSubmitInvalid() {
    const dirtyInputs = Object.values(isDirty).filter((i) => !!i === false);

    if (dirtyInputs.length) {
      const newIsDirty = {};
      Object.keys(isDirty).forEach((key) => {
        newIsDirty[key] = true;
      });

      setIsDirty({ ...newIsDirty });
      return true;
    }

    const errors = Object.values(errorMessages).filter((i) => !!i === true);
    if (errors.length) return true;
  }

  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function onBlur(e) {
    setIsDirty((prev) => ({ ...prev, [e.target.name]: true }));
  }

  function displayCustomError(errorText) {
    const newErrorMessages = {};
    Object.keys({ ...errorMessages }).forEach((err) => {
      newErrorMessages[err] = errorText;
    });

    setErrorMessages(newErrorMessages);
  }

  const inputComponents = inputs.map((input) =>
    input.element === "select" ? (
      <FormSelect
        key={input.id}
        className={input.wrapperClassName}
        inputClassName={input.inputData.className}
        inputProps={{ ...input.inputData.props }}
        label={input.labelData ? input.labelData : null}
        errorMessage={errorMessages[input.inputData.props.name]}
        onChange={onChange}
        onBlur={onBlur}
        value={formValues[input.inputData.props.name]}
        list={input.list}
      />
    ) : input.element === "input" ? (
      <FormInput
        key={input.id}
        className={input.wrapperClassName}
        inputClassName={input.inputData.className}
        inputProps={{ ...input.inputData.props }}
        label={input.labelData ? input.labelData : null}
        errorMessage={errorMessages[input.inputData.props.name]}
        onChange={onChange}
        onBlur={onBlur}
        value={formValues[input.inputData.props.name]}
      />
    ) : (
      ""
    )
  );

  return { inputComponents, isSubmitInvalid, formValues, displayCustomError };
}

export default useForm;
