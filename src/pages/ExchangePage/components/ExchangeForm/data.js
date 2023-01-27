const todayDate = new Date().toISOString().split("T")[0]
const twoMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 2))
  .toISOString()
  .split("T")[0]

export const formInputsData = [
  {
    id: 1,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "dateStart",
        type: "date",
        max: todayDate,
        placeholder: "",
        autoFocus: true,
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Bot started",
      hint: "The date when bot was started. Min date 2month ago!",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date from!",
        },
      ],
    },
  },
  {
    id: 2,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "analysisDepth",
        type: "datetime-local",
        placeholder: "",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Start Scanning From",
      hint: "Date when bot start scanning. Not earlier than two months from the start date and not later than the launch date itself!",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter date form!",
        },
      ],
    },
  },
  {
    id: 3,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "deposit",
        type: "number",
        placeholder: "Enter your deposit",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Deposit",
      hint: "How much money will you give the bot to work with.",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your deposit in $!",
        },
      ],
    },
  },
  {
    id: 4,
    wrapperClassName: "exchangePage__takeStopBlock",
    element: "inputsRow",
    inputs: [
      {
        id: 4.1,
        wrapperClassName: "exchangePage__formBlock",
        element: "input",
        inputData: {
          className: "exchangePage__TakeInput",
          props: {
            name: "takeProfit",
            type: "number",
            placeholder: "%",
          },
        },
        labelData: {
          className: "exchangePage__formLabel",
          text: "Take profit",
          hint: "A take-profit order is a type of limit order that specifies the exact price at which to close out an open position for a profit.",
        },
        errorsData: {
          className: "exchangePage__errorMsg",
          errors: [
            {
              condition: "^s*$",
              message: "Please enter take profit!",
            },
            {
              pattern: "^[1-9][0-9]?$|^100$",
              message: "Please enter 1-100%",
            },
          ],
        },
      },
      {
        id: 4.2,
        wrapperClassName: "exchangePage__formBlock",
        element: "input",
        inputData: {
          className: "exchangePage__stopInput",
          props: {
            name: "stopLose",
            type: "number",
            placeholder: "%",
          },
        },
        labelData: {
          className: "exchangePage__formLabel",
          text: "Stop lose",
          hint: "Stop-loss can be defined as an advance order to sell an asset when it reaches a particular price point. It is used to limit loss or gain in a trade.",
        },
        errorsData: {
          className: "exchangePage__errorMsg",
          errors: [
            {
              condition: "^s*$",
              message: "Please enter stop lose!",
            },
            {
              pattern: "^[1-9][0-9]?$|^100$",
              message: "Please enter 1-100%",
            },
          ],
        },
      },
    ],
  },
  {
    id: 5,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "holdingTime",
        type: "number",
        placeholder: "Enter time in hours",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Holding time",
      hint: "The holding time is the time for which the investors hold the investment or, in other words, the time between the purchase and sale of securities.",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter holding time!",
        },
        {
          pattern: "^[1-9][0-9]?$|^48$",
          message: "Please enter 1-48hrs !",
        },
      ],
    },
  },
]
