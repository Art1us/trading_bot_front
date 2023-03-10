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
        {
          condition: "[^\x00-\x7F]+",
          message: "Only english, digits and special characters allowed",
        },
        {
          pattern:
            "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
            "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$",
          message: "Please enter a valid email",
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
        {
          condition: "[^\x00-\x7F]+",
          message: "Only english, digits and special characters allowed",
        },
        {
          condition: "^(.{1,7})$",
          message: "Your password is too short!",
        },
        {
          condition: "^[A-Za-z0-9]*$",
          message: "Please include at least one special character",
        },
        {
          condition: "^[^A-Z]+$",
          message: "Please include an uppercase letter",
        },
        {
          condition: "^[^a-z]+$",
          message: "Please include an lowercase letter",
        },
        {
          condition: "^[^0-9]+$",
          message: "Please include a digit",
        },
      ],
    },
  },
  {
    id: 3,
    wrapperClassName: "login__formBlock",
    element: "input",
    inputData: {
      className: "login__formInput",
      props: {
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
      },
    },
    labelData: {
      className: "login__formLabel",
      text: "Confirm password",
    },
    errorsData: {
      errors: [
        {
          equalsToInput: "password",
          message: "Passwords don't match",
        },
        {
          condition: "^s*$",
          message: "Please confirm your password!",
        },
      ],
    },
  },
]

export default formInputsData
