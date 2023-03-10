import React, { useEffect, useMemo, useState } from "react"
import FormInput from "./FormInput/FormInput"
import FormSelect from "./FormSelect/FormSelect"

function useForm(inputs, values) {
  const initializationInputs = useMemo(() => {
    const initializationInputs = []
    for (let input of inputs) {
      if (input.element === "inputsRow") {
        for (let innerInput of input.inputs) {
          initializationInputs.push(innerInput)
        }
      } else {
        initializationInputs.push(input)
      }
    }
    return initializationInputs
  }, [inputs])

  const initialFormValues = values ? { ...values } : {}
  if (!values) {
    initializationInputs.forEach(input => {
      initialFormValues[input.inputData.props.name] = ""
    })
  }

  const initialFormErrors = {}
  initializationInputs.forEach(input => {
    initialFormErrors[input.inputData.props.name] = ""
  })

  const initialFormIsDirty = {}
  initializationInputs.forEach(input => {
    initialFormIsDirty[input.inputData.props.name] = values ? true : false
  })

  const [formValues, setFormValues] = useState(initialFormValues)
  const [errorMessages, setErrorMessages] = useState(initialFormErrors)
  const [isDirty, setIsDirty] = useState(initialFormIsDirty)

  useEffect(() => {
    initializationInputs.forEach(input => {
      if (input.errorsData) {
        function getError() {
          for (let error of input.errorsData.errors) {
            if (
              error.equalsToInput &&
              formValues[input.inputData.props.name] !==
                formValues[error.equalsToInput]
            ) {
              return "Passwords don't match"
            } //error if input not equals to other input

            if (
              error.condition &&
              new RegExp(error.condition).test(
                formValues[input.inputData.props.name]
              )
            ) {
              return error.message
            } //error if matching condition

            if (
              error.pattern &&
              !new RegExp(error.pattern).test(
                formValues[input.inputData.props.name]
              )
            ) {
              return error.message
            } //error if not matching pattern
          }
        }

        if (isDirty[input.inputData.props.name] && getError()) {
          setErrorMessages(prev => ({
            ...prev,
            [input.inputData.props.name]: getError(),
          }))
        } else {
          setErrorMessages(prev => ({
            ...prev,
            [input.inputData.props.name]: "",
          }))
        }
      }
    })
  }, [formValues, isDirty])

  function isSubmitInvalid() {
    const dirtyInputs = Object.values(isDirty).filter(i => !!i === false)

    if (dirtyInputs.length) {
      const newIsDirty = {}
      Object.keys(isDirty).forEach(key => {
        newIsDirty[key] = true
      })

      setIsDirty({ ...newIsDirty })
      return true
    }

    const errors = Object.values(errorMessages).filter(i => !!i === true)
    if (errors.length) return true
  }

  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  function onBlur(e) {
    setIsDirty(prev => ({ ...prev, [e.target.name]: true }))
  }

  function displayCustomError(errorText, elementName) {
    if (!errorText) return
    if (
      elementName &&
      elementName in errorMessages &&
      typeof elementName === "string"
    ) {
      setErrorMessages(prev => ({ ...prev, [elementName]: errorText }))
    } else {
      const newErrorMessages = {}
      Object.keys({ ...errorMessages }).forEach(err => {
        newErrorMessages[err] = errorText
      })
      setErrorMessages(newErrorMessages)
    }
  }

  const inputComponents = inputs.map(input =>
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
        label={input.labelData ? input.labelData : null}
        input={{
          ...input.inputData,
          value: formValues[input.inputData.props.name],
          onChange,
          onBlur,
        }}
        error={{
          className: input.errorsData?.className,
          errorMessage: errorMessages[input.inputData.props.name],
        }}
      />
    ) : input.element === "inputsRow" ? (
      <div
        className={
          input.wrapperClassName
            ? input.wrapperClassName
            : "fromInputRow__defaultStyles"
        }
        key={input.id}
      >
        {input.inputs.map(input => (
          <FormInput
            key={input.id}
            className={input.wrapperClassName}
            label={input.labelData ? input.labelData : null}
            input={{
              ...input.inputData,
              value: formValues[input.inputData.props.name],
              onChange,
              onBlur,
            }}
            error={{
              className: input.errorsData?.className,
              errorMessage: errorMessages[input.inputData.props.name],
            }}
          />
        ))}
      </div>
    ) : (
      ""
    )
  )

  return {
    inputComponents,
    isSubmitInvalid,
    formValues,
    displayCustomError,
  }
}

export default useForm
