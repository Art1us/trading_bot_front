import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput/FormInput";

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

  const inputComponents = inputs.map((input) => (
    <FormInput
      key={input.id}
      {...input}
      onChange={onChange}
      errorMessage={errorMessages[input.name]}
      setIsDirty={setIsDirty}
      value={formValues[input.name]}
    />
  ))

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

  return {inputComponents,isSubmitInvalid}

}

export default useForm;
