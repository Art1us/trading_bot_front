const formInputsData = [
  {
    id: 1,
    wrapperClassName: "login__formBlock",
    element: "input",
    inputData: {
      className: "login__formInput",
      props: {
        name: "email",
        type: "text",
        placeholder: "Email",
        autoFocus: true,
      },
    },
    labelData: {
      className: "login__formLabel",
      text: "Email",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your email!",
        },
      ],
    },
  },
  {
    id: 2,
    wrapperClassName: "login__formBlock",
    element: "input",
    inputData: {
      className: "login__formInput",
      props: { name: "password", type: "password", placeholder: "Password" },
    },
    labelData: {
      className: "login__formLabel",
      text: "Password",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your password!",
        },
      ],
    },
  },
]

export default formInputsData
