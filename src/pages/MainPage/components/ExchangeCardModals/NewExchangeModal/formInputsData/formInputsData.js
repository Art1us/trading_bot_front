const formInputsData = [
  {
    id: 1,
    wrapperClassName: "login__formBlock",
    element: "select",
    inputData: {
      className: "newExchangeModal__formInput",
      props: {
        name: "exchangeId",
        placeholder: "",
      },
    },
    list: [],
    labelData: {
      className: "newExchangeModal__formTitle",
      text: "Select Exchanges",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please select your exchange!",
        },
      ],
    },
  },
  {
    id: 2,
    wrapperClassName: "login__formBlock",
    element: "input",
    inputData: {
      className: "newExchangeModal__formInput",
      props: {
        name: "publicKey",
        type: "text",
        placeholder: "Enter your public key",
      },
    },
    labelData: {
      className: "newExchangeModal__formTitle",
      text: "Public key",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your public key!",
        },
        {
          condition: "^(.{1,7})$",
          message: "Please enter a valid public key!",
        },
      ],
    },
  },
  {
    id: 3,
    wrapperClassName: "login__formBlock",
    element: "input",
    inputData: {
      className: "newExchangeModal__formInput",
      props: {
        name: "secretKey",
        type: "password",
        placeholder: "Enter your secret key",
      },
    },
    labelData: {
      className: "newExchangeModal__formTitle",
      text: "Secret key",
    },
    errorsData: {
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your secret key!",
        },
        {
          condition: "^(.{1,7})$",
          message: "Please enter a valid secret key!",
        },
      ],
    },
  },
]

export default formInputsData
