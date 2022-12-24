import React, { useEffect, useState } from "react";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function useForm(inputs, values) {
  const initialFormValues = values ? { ...values } : {};
  if (!values) {
    inputs.forEach((input) => {
      initialFormValues[input.name] = "";
    });
  }

  const initialFormErrors = {};
  inputs.forEach((input) => {
    initialFormErrors[input.name] = "";
  });

  const initialFormIsDirty = {}
  inputs.forEach((input)=>{
    initialFormIsDirty[input.name] = values ? true : false;
  })

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorMessages, setErrorMessages] = useState(initialFormErrors);
  const [isDirty, setIsDirty] = useState(initialFormIsDirty);
  
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
        onBlur={() => {
          setIsDirty((prev) => ({ ...prev, [input.name]: true }));
        }}
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
        onBlur={onBlur}
        errorMessage={errorMessages[input.name]}
        value={formValues[input.name]}
      />
    )
  );

  return { inputComponents, isSubmitInvalid, formValues };
}

export default useForm;
