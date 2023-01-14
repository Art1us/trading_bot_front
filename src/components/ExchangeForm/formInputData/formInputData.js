const todayDate = new Date().toISOString().split("T")[0]
const twoMonthAgo = new Date(new Date().setMonth(new Date().getMonth() - 2))
  .toISOString()
  .split("T")[0]

const formInputsData = [
  {
    id: 1,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "dateStart",
        type: "date",
        min: twoMonthAgo,
        max: todayDate,
        placeholder: "",
        autoFocus: true,
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Date Bot started",
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
        name: "scanFrom",
        type: "datetime-local",
        placeholder: "",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Start Scanning From",
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
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "takeProfit",
        type: "number",
        min: "1",
        max: "100",
        placeholder: "%",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Take profit",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter!",
        },
      ],
    },
  },
  {
    id: 5,
    wrapperClassName: "exchangePage__formBlock",
    element: "input",
    inputData: {
      className: "exchangePage__formInput",
      props: {
        name: "stopLose",
        type: "number",
        placeholder: "%",
      },
    },
    labelData: {
      className: "exchangePage__formLabel",
      text: "Stop lose",
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter your parameter!",
        },
      ],
    },
  },
  {
    id: 6,
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
    },
    errorsData: {
      className: "exchangePage__errorMsg",
      errors: [
        {
          condition: "^s*$",
          message: "Please enter holding time!",
        },
      ],
    },
  },
]

export default formInputsData
