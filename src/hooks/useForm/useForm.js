import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function useForm(inputs) {
  const initialFormValues = {};
  inputs.forEach((input) => {
    initialFormValues[input.name] = "";
  });
  
  const [formValues, setFormValues] = useState(initialFormValues);

  const [errorMessages, setErrorMessages] = useState(initialFormValues);

  const [isDirty, setIsDirty] = useState(initialFormValues);

  useEffect(() => {
    inputs.forEach((item) => {
      function getError() {
        for (let error of item.errors) {
          if (
            error.condition &&
            new RegExp(error.condition).test(formValues[item.name])
          ) {
            return error.message;
          }

          if (
            error.pattern &&
            !new RegExp(error.pattern).test(formValues[item.name])
          ) {
            return error.message;
          }
        }
      }

      if (isDirty[item.name] && getError()) {
        setErrorMessages((prev) => ({ ...prev, [item.name]: getError() }));
      } else {
        setErrorMessages((prev) => ({ ...prev, [item.name]: "" }));
      }
    });
  }, [formValues, isDirty]);

  function isSubmitInvalid() {
    if (!isDirty.email || !isDirty.password) {
      setIsDirty({ email: true, password: true });
      return true;
    }
    if (errorMessages.email || errorMessages.password) return true;
  }

  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  const inputComponents = inputs.map((input) =>
    input.type === "select" ? (
      <FormSelect
        key={input.id}
        placeholder={input.placeholder}
        label={input.label ? input.label : null}
        name={input.name}
        inputClassName={input.inputClassName}
        className={input.className}
        errorMessage={errorMessages[input.name]}
        setIsDirty={setIsDirty}
        onChange={onChange}
        value={formValues[input.name]}
        list={input.list}
      />
    ) : (
      <FormInput
        key={input.id}
        name={input.name}
        type={input.type}
        placeholder={input.placeholder}
        label={input.label ? input.label : null}
        inputClassName={input.inputClassName}
        className={input.className}
        onChange={onChange}
        errorMessage={errorMessages[input.name]}
        setIsDirty={setIsDirty}
        value={formValues[input.name]}
      />
    )
  );

  return { inputComponents, isSubmitInvalid, formValues };
}

export default useForm;
